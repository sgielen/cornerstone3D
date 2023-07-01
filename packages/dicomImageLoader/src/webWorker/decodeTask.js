import { initialize as initializeJPEG2000 } from '../shared/decoders/decodeJPEG2000';
import { initialize as initializeJPEGLS } from '../shared/decoders/decodeJPEGLS';
import calculateMinMax from '../shared/calculateMinMax';
import decodeImageFrame from '../shared/decodeImageFrame';

function loadCodecs(config) {
  // Initialize the codecs
  if (config.decodeTask.initializeCodecsOnStartup) {
    initializeJPEG2000(config.decodeTask);
    initializeJPEGLS(config.decodeTask);
  }
}

function initialize(config) {
  loadCodecs(config);
}

async function handler(data) {
  // Load the codecs if they aren't already loaded
  loadCodecs(decodeConfig);

  const strict =
    decodeConfig && decodeConfig.decodeTask && decodeConfig.decodeTask.strict;

  const pixelData = new Uint8Array(data.data.pixelData);
  const imageFrame = await decodeImageFrame(
    data.data.imageFrame,
    data.data.transferSyntax,
    pixelData,
    Object.assign(decodeConfig.decodeTask, data.data.decodeConfig),
    data.data.options
  );

  if (!imageFrame.pixelData) {
    throw new Error(
      'decodeTask: imageFrame.pixelData is undefined after decoding'
    );
  }

  calculateMinMax(imageFrame, strict);

  imageFrame.pixelData = imageFrame.pixelData.buffer;

  return {
    result: imageFrame,
    transferList: [imageFrame.pixelData],
  };
}

export function createDecodeTask(config) {
  return {
    initialize: () => initialize(config),
    handler: handler,
  };
}
