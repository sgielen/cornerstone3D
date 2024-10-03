## API Report File for "@cornerstonejs/dicom-image-loader"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ByteArray } from 'dicom-parser';
import type ColorTransferFunction from '@kitware/vtk.js/Rendering/Core/ColorTransferFunction';
import { DataSet } from 'dicom-parser';
import type { Element as Element_2 } from 'dicom-parser';
import { ImageQualityStatus as ImageQualityStatus_2 } from 'packages/core/dist/esm/enums';
import type { mat3 } from 'gl-matrix';
import { mat4 } from 'gl-matrix';
import { PromiseIterator as PromiseIterator_2 } from 'packages/core/dist/esm/utilities/ProgressiveIterator';
import type { Range as Range_2 } from '@kitware/vtk.js/types';
import { vec3 } from 'gl-matrix';
import type vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import type { vtkCamera } from '@kitware/vtk.js/Rendering/Core/Camera';
import { vtkColorTransferFunction } from '@kitware/vtk.js/Rendering/Core/ColorTransferFunction';
import { vtkImageData } from '@kitware/vtk.js/Common/DataModel/ImageData';
import type vtkImageSlice from '@kitware/vtk.js/Rendering/Core/ImageSlice';
import type { vtkObject } from '@kitware/vtk.js/interfaces';
import type vtkOpenGLTexture from '@kitware/vtk.js/Rendering/OpenGL/Texture';
import vtkPlane from '@kitware/vtk.js/Common/DataModel/Plane';
import type vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer';
import type vtkVolume from '@kitware/vtk.js/Rendering/Core/Volume';
import type vtkVolumeMapper from '@kitware/vtk.js/Rendering/Core/VolumeMapper';

// @public (undocumented)
export function configure(options: LoaderOptions): void;

declare namespace constants {
    export {
        transferSyntaxes
    }
}
export { constants }

// @public (undocumented)
export function convertColorSpace(imageFrame: any, colorBuffer: any, useRGBA: any): void;

// @public (undocumented)
export function (imageFrame: Types_2.IImageFrame, colorBuffer: ByteArray, useRGBA: boolean): void;

// @public (undocumented)
export function (imageFrame: ByteArray, colorBuffer: ByteArray, useRGBA: boolean): void;

// @public (undocumented)
export function (imageFrame: ByteArray, colorBuffer: ByteArray, useRGBA: boolean): void;

// @public (undocumented)
export function (imageFrame: ByteArray, colorBuffer: ByteArray, useRGBA: boolean): void;

// @public (undocumented)
export function (imageFrame: ByteArray, colorBuffer: ByteArray, useRGBA: boolean): void;

// @public (undocumented)
const cornerstoneDICOMImageLoader: {
    constants: typeof constants;
    convertRGBColorByPixel: typeof convertRGBColorByPixel;
    convertRGBColorByPlane: typeof convertRGBColorByPlane;
    convertYBRFullByPixel: typeof convertYBRFullByPixel;
    convertYBRFullByPlane: typeof convertYBRFullByPlane;
    convertPALETTECOLOR: typeof convertPALETTECOLOR;
    wadouri: {
        metaData: {
            getImagePixelModule: getImagePixelModule;
            getLUTs: getLUTs;
            getModalityLUTOutputPixelRepresentation: getModalityLUTOutputPixelRepresentation;
            getNumberValues: getNumberValues;
            metaDataProvider: metaDataProvider;
        };
        dataSetCacheManager: {
            isLoaded: (uri: string) => boolean;
            load: (uri: string, loadRequest: Types.LoadRequestFunction, imageId: string) => CornerstoneWadoLoaderCachedPromise;
            unload: (uri: string) => void;
            getInfo: getInfo;
            purge: () => void;
            get: (uri: string) => DataSet;
            update: (uri: string, dataSet: DataSet) => void;
        };
        fileManager: {
            add: (file: Blob) => string;
            get: (index: number) => Blob;
            remove: (index: number) => void;
            purge: () => void;
        };
        getEncapsulatedImageFrame: getEncapsulatedImageFrame;
        getUncompressedImageFrame: getUncompressedImageFrame;
        loadFileRequest: loadFileRequest;
        loadImageFromPromise: loadImageFromPromise;
        getLoaderForScheme: getLoaderForScheme;
        loadImage: loadImage;
        parseImageId: parseImageId;
        unpackBinaryFrame: unpackBinaryFrame;
        register: default_2;
    };
    wadors: {
        metaData: {
            getNumberString: getNumberString;
            getNumberValue: getNumberValue;
            getNumberValues: getNumberValues_2;
            getValue: getValue_2;
            metaDataProvider: metaDataProvider_2;
        };
        findIndexOfString: findIndexOfString;
        getPixelData: typeof getPixelData;
        loadImage: loadImage_3;
        metaDataManager: {
            add: (imageId: string, metadata: Types.WADORSMetaData) => void;
            get: (imageId: string) => Types.WADORSMetaData;
            remove: (imageId: any) => void;
            purge: () => void;
        };
        register: default_3;
    };
    configure: typeof configure;
    convertColorSpace: typeof convertColorSpace;
    createImage: typeof createImage;
    decodeJPEGBaseline8BitColor: typeof decodeJPEGBaseline8BitColor;
    getImageFrame: typeof getImageFrame;
    getPixelData: typeof getPixelData;
    getMinMax: typeof getMinMax;
    isColorImage: typeof isColorImage;
    isJPEGBaseline8BitColor: typeof isJPEGBaseline8BitColor;
    internal: {
        xhrRequest: xhrRequest;
        streamRequest: streamRequest;
        setOptions: setOptions;
        getOptions: getOptions;
    };
    external: {
        cornerstone: any;
        dicomParser: any;
    };
};
export default cornerstoneDICOMImageLoader;

// @public (undocumented)
export function createImage(imageId: string, pixelData: ByteArray, transferSyntax: string, options?: DICOMLoaderImageOptions): Promise<DICOMLoaderIImage | Types_2.IImageFrame>;

// @public (undocumented)
export function decodeJPEGBaseline8BitColor(imageFrame: Types_2.IImageFrame, pixelData: ByteArray, canvas: HTMLCanvasElement): Promise<Types_2.IImageFrame>;

// @public (undocumented)
interface DICOMLoaderDataSetWithFetchMore extends DataSet {
    // (undocumented)
    fetchMore?: (fetchOptions: {
        uri: string;
        imageId: string;
        fetchedLength: number;
        lengthToFetch: number;
    }) => Promise<DICOMLoaderDataSetWithFetchMore>;
}

// @public (undocumented)
interface DICOMLoaderIImage extends Types_2.IImage {
    // (undocumented)
    data?: DataSet;
    // (undocumented)
    decodeTimeInMS: number;
    // (undocumented)
    floatPixelData?: ByteArray | Float32Array;
    // (undocumented)
    imageFrame?: Types_2.IImageFrame;
    // (undocumented)
    loadTimeInMS?: number;
    // (undocumented)
    totalTimeInMS?: number;
    // (undocumented)
    transferSyntaxUID?: string;
    // (undocumented)
    voiLUTFunction: string | undefined;
}

// @public (undocumented)
interface DICOMLoaderImageOptions {
    // (undocumented)
    allowFloatRendering?: boolean;
    // (undocumented)
    decodeLevel?: number;
    // (undocumented)
    loader?: LoadRequestFunction;
    // (undocumented)
    preScale?: {
        enabled: boolean;
        scalingParameters?: Types_2.ScalingParameters;
    };
    // (undocumented)
    retrieveOptions?: Types_2.RetrieveOptions;
    // (undocumented)
    streamingData?: StreamingData;
    // (undocumented)
    targetBuffer?: {
        type: Types_2.PixelDataTypedArrayString;
        arrayBuffer: ArrayBufferLike;
        length: number;
        offset: number;
        rows?: number;
        columns?: number;
    };
    // (undocumented)
    useRGBA?: boolean;
}

// @public (undocumented)
const external_2: {
    cornerstone: any;
    dicomParser: any;
};
export { external_2 as external }

// @public (undocumented)
export function getImageFrame(imageId: string): Types_2.IImageFrame;

// @public (undocumented)
export function getMinMax(storedPixelData: Types_2.PixelDataTypedArray): {
    min: number;
    max: number;
};

// @public (undocumented)
export function getPixelData(uri: string, imageId: string, mediaType?: string, options?: CornerstoneWadoRsLoaderOptions): PromiseIterator_2<unknown> | LoaderXhrRequestPromise<    {
contentType: string;
pixelData: Uint8Array;
imageQualityStatus: ImageQualityStatus_2;
percentComplete: number;
}> | Promise<{
    contentType: string;
    imageQualityStatus: ImageQualityStatus_2;
    pixelData: Uint8Array;
    extractDone?: undefined;
    tokenIndex?: undefined;
    responseHeaders?: undefined;
    boundary?: undefined;
    multipartContentType?: undefined;
} | {
    contentType: any;
    extractDone: boolean;
    tokenIndex: any;
    responseHeaders: any;
    boundary: any;
    multipartContentType: any;
    pixelData: any;
    imageQualityStatus?: undefined;
}>;

// @public (undocumented)
export const internal: {
    xhrRequest: typeof xhrRequest;
    streamRequest: typeof streamRequest;
    setOptions: typeof setOptions;
    getOptions: typeof getOptions;
};

// @public (undocumented)
export function (photoMetricInterpretation: string): boolean;

// @public (undocumented)
export function isJPEGBaseline8BitColor(imageFrame: Types_2.IImageFrame, transferSyntax: string): boolean;

// @public (undocumented)
interface LoaderDecodeOptions {
}

// @public (undocumented)
interface LoaderOptions {
    // (undocumented)
    beforeProcessing?: (xhr: XMLHttpRequest) => Promise<ArrayBuffer>;
    // (undocumented)
    beforeSend?: (xhr: XMLHttpRequest, imageId: string, defaultHeaders: Record<string, string>, params: LoaderXhrRequestParams) => Record<string, string> | void;
    // (undocumented)
    cornerstone?: unknown;
    // (undocumented)
    decodeConfig?: LoaderDecodeOptions;
    // (undocumented)
    dicomParser?: unknown;
    // (undocumented)
    errorInterceptor?: (error: LoaderXhrRequestError) => void;
    // (undocumented)
    imageCreated?: (imageObject: unknown) => void;
    // (undocumented)
    maxWebWorkers?: number;
    // (undocumented)
    onloadend?: (event: ProgressEvent<EventTarget>, params: unknown) => void;
    // (undocumented)
    onloadstart?: (event: ProgressEvent<EventTarget>, params: unknown) => void;
    // (undocumented)
    onprogress?: (event: ProgressEvent<EventTarget>, params: unknown) => void;
    // (undocumented)
    onreadystatechange?: (event: Event, params: unknown) => void;
    // (undocumented)
    open?: (xhr: XMLHttpRequest, url: string, defaultHeaders: Record<string, string>, params: LoaderXhrRequestParams) => void;
    // (undocumented)
    strict?: boolean;
}

// @public (undocumented)
interface LoaderXhrRequestError extends Error {
    // (undocumented)
    request: XMLHttpRequest;
    // (undocumented)
    response: unknown;
    // (undocumented)
    status: number;
}

// @public (undocumented)
interface LoaderXhrRequestParams {
    // (undocumented)
    deferred?: {
        resolve: (value: ArrayBuffer | PromiseLike<ArrayBuffer>) => void;
        reject: (reason: any) => void;
    };
    // (undocumented)
    imageId?: string;
    // (undocumented)
    url?: string;
}

// @public (undocumented)
interface LoaderXhrRequestPromise<T> extends Promise<T> {
    // (undocumented)
    xhr?: XMLHttpRequest;
}

// @public (undocumented)
type LoadRequestFunction = (url: string, imageId: string, ...args: unknown[]) => Promise<ArrayBuffer>;

// @public (undocumented)
interface LutType {
    // (undocumented)
    firstValueMapped: number;
    // (undocumented)
    id: string;
    // (undocumented)
    lut: number[];
    // (undocumented)
    numBitsPerEntry: number;
}

// @public (undocumented)
namespace transferSyntaxes {
    let // (undocumented)
    IMPLICIT_VR_LITTLE_ENDIAN: string;
    let // (undocumented)
    EXPLICIT_VR_LITTLE_ENDIAN: string;
    let // (undocumented)
    DEFLATED_EXPLICIT_VR_LITTLE_ENDIAN: string;
    let // (undocumented)
    EXPLICIT_VR_BIG_ENDIAN: string;
    let // (undocumented)
    JPEG_BASELINE_PROCESS_1: string;
    let // (undocumented)
    JPEG_EXTENDED_PROCESS_2_4: string;
    let // (undocumented)
    JPEG_EXTENDED_PROCESSES_3_5: string;
    let // (undocumented)
    JPEG_SPECTRAL_SELECTION_NONHIERARCHICAL_PROCESSES_6_8: string;
    let // (undocumented)
    JPEG_SPECTRAL_SELECTION_NONHIERARCHICAL_PROCESSES_7_9: string;
    let // (undocumented)
    JPEG_FULL_PROGRESSION_NONHIERARCHICAL_PROCESSES_10_12: string;
    let // (undocumented)
    JPEG_FULL_PROGRESSION_NONHIERARCHICAL_PROCESSES_11_13: string;
    let // (undocumented)
    JPEG_LOSSLESS_NONHIERARCHICAL_PROCESS_14: string;
    let // (undocumented)
    JPEG_LOSSLESS_NONHIERARCHICAL_PROCESS_15: string;
    let // (undocumented)
    JPEG_EXTENDED_HIERARCHICAL_PROCESSES_16_18: string;
    let // (undocumented)
    JPEG_EXTENDED_HIERARCHICAL_PROCESSES_17_19: string;
    let // (undocumented)
    JPEG_SPECTRAL_SELECTION_HIERARCHICAL_PROCESSES_20_22: string;
    let // (undocumented)
    JPEG_SPECTRAL_SELECTION_HIERARCHICAL_PROCESSES_21_23: string;
    let // (undocumented)
    JPEG_FULL_PROGRESSION_HIERARCHICAL_PROCESSES_24_26: string;
    let // (undocumented)
    JPEG_FULL_PROGRESSION_HIERARCHICAL_PROCESSES_25_27: string;
    let // (undocumented)
    JPEG_LOSSLESS_NONHIERARCHICAL_PROCESS_28: string;
    let // (undocumented)
    JPEG_LOSSLESS_NONHIERARCHICAL_PROCESS_29: string;
    let // (undocumented)
    JPEG_LOSSLESS_NONHIERARCHICAL_FIRST_ORDER_PREDICTION_PROCESS_14: string;
    let // (undocumented)
    JPEG_LS_LOSSLESS_IMAGE_COMPRESSION: string;
    let // (undocumented)
    JPEG_LS_LOSSY_NEAR_LOSSLESS_IMAGE_COMPRESSION: string;
    let // (undocumented)
    JPEG_2000_IMAGE_COMPRESSION_LOSSLESS_ONLY: string;
    let // (undocumented)
    JPEG_2000_IMAGE_COMPRESSION: string;
    let // (undocumented)
    JPEG_2000_PART_2_MULTICOMPONENT_IMAGE_COMPRESSION_LOSSLESS_ONLY: string;
    let // (undocumented)
    JPEG_2000_PART_2_MULTICOMPONENT_IMAGE_COMPRESSION: string;
    let // (undocumented)
    JPIP_REFERENCED: string;
    let // (undocumented)
    JPIP_REFERENCED_DEFLATE: string;
    let // (undocumented)
    MPEG2_MAIN_PROFILE_MAIN_LEVEL: string;
    let // (undocumented)
    MPEG4_AVC_H264_HIGH_PROFILE_LEVEL_4_1: string;
    let // (undocumented)
    MPEG4_AVC_H264_BD_COMPATIBLE_HIGH_PROFILE_LEVEL_4_1: string;
    let // (undocumented)
    MPEG4_AVC_H264_HIGH_PROFILE_FOR_2D_VIDEO: string;
    let // (undocumented)
    MPEG4_AVC_H264_HIGH_PROFILE_FOR_3D_VIDEO: string;
    let // (undocumented)
    JPIP_LOSSLESS: string;
    let // (undocumented)
    JPIP_PART2_MULTICOMPONENT_IMAGE_COMPRESSION: string;
    let // (undocumented)
    RFC_2557_MIME_ENCAPSULATION: string;
    let // (undocumented)
    JPEG_XR_IMAGE_COMPRESSION: string;
    let // (undocumented)
    JPEG_2000_IMAGE_COMPRESSION_LOSSLESS_ONLY_RETIRED: string;
    let // (undocumented)
    JPEG_2000_IMAGE_COMPRESSION_RETIRED: string;
    let // (undocumented)
    JPEG_2000_PART_2_MULTICOMPONENT_IMAGE_COMPRESSION_LOSSLESS_ONLY_RETIRED: string;
    let // (undocumented)
    JPEG_2000_PART_2_MULTICOMPONENT_IMAGE_COMPRESSION_RETIRED: string;
}

declare namespace Types {
    export {
        LoaderDecodeOptions,
        LoaderOptions,
        WADORSMetaData,
        WADORSMetaDataElement,
        LoaderXhrRequestError,
        LoaderXhrRequestParams,
        LoaderXhrRequestPromise,
        DICOMLoaderIImage,
        DICOMLoaderImageOptions,
        LutType,
        WebWorkerOptions,
        WebWorkerDecodeConfig,
        WebWorkerTaskOptions,
        WorkerTaskTypes,
        WorkerTask,
        WebWorkerDecodeTaskData,
        WebWorkerDecodeData,
        WebWorkerLoadData,
        WebWorkerInitializeData,
        WebWorkerData,
        WebWorkerResponse,
        WebWorkerDeferredObject,
        LoadRequestFunction,
        DICOMLoaderDataSetWithFetchMore
    }
}
export { Types }

// @public (undocumented)
export const wadors: {
    metaData: {
        getNumberString: typeof getNumberString;
        getNumberValue: typeof getNumberValue;
        getNumberValues: typeof getNumberValues_2;
        getValue: typeof getValue_2;
        metaDataProvider: typeof metaDataProvider_2;
    };
    findIndexOfString: typeof findIndexOfString;
    getPixelData: typeof getPixelData;
    loadImage: typeof loadImage_3;
    metaDataManager: {
        add: (imageId: string, metadata: WADORSMetaData) => void;
        get: (imageId: string) => WADORSMetaData;
        remove: (imageId: any) => void;
        purge: () => void;
    };
    register: typeof default_3;
};

// @public (undocumented)
type WADORSMetaData = Record<string, WADORSMetaDataElement>;

// @public (undocumented)
interface WADORSMetaDataElement<ValueType = string[] | number[] | boolean> {
    // (undocumented)
    Value: ValueType;
}

// @public (undocumented)
export const wadouri: {
    metaData: {
        getImagePixelModule: typeof getImagePixelModule;
        getLUTs: typeof getLUTs;
        getModalityLUTOutputPixelRepresentation: typeof getModalityLUTOutputPixelRepresentation;
        getNumberValues: typeof getNumberValues;
        metaDataProvider: typeof metaDataProvider;
    };
    dataSetCacheManager: {
        isLoaded: (uri: string) => boolean;
        load: (uri: string, loadRequest: LoadRequestFunction, imageId: string) => CornerstoneWadoLoaderCachedPromise;
        unload: (uri: string) => void;
        getInfo: getInfo;
        purge: () => void;
        get: (uri: string) => DataSet;
        update: (uri: string, dataSet: DataSet) => void;
    };
    fileManager: {
        add: (file: Blob) => string;
        get: (index: number) => Blob;
        remove: (index: number) => void;
        purge: () => void;
    };
    getEncapsulatedImageFrame: typeof getEncapsulatedImageFrame;
    getUncompressedImageFrame: typeof getUncompressedImageFrame;
    loadFileRequest: typeof loadFileRequest;
    loadImageFromPromise: typeof loadImageFromPromise;
    getLoaderForScheme: typeof getLoaderForScheme;
    loadImage: typeof loadImage;
    parseImageId: typeof parseImageId;
    unpackBinaryFrame: typeof unpackBinaryFrame;
    register: typeof default_2;
};

// @public (undocumented)
type WebWorkerData = WebWorkerDecodeData | WebWorkerLoadData | WebWorkerInitializeData;

// @public (undocumented)
interface WebWorkerDecodeConfig {
    // (undocumented)
    initializeCodecsOnStartup: boolean;
    // (undocumented)
    strict?: boolean;
}

// @public (undocumented)
interface WebWorkerDecodeData {
    // (undocumented)
    data: WebWorkerDecodeTaskData;
    // (undocumented)
    taskType: 'decodeTask';
    // (undocumented)
    workerIndex: number;
}

// @public (undocumented)
interface WebWorkerDecodeTaskData {
    // (undocumented)
    decodeConfig: LoaderDecodeOptions;
    // (undocumented)
    imageFrame: Types_2.IImageFrame;
    // (undocumented)
    options: LoaderOptions;
    // (undocumented)
    pixelData: ByteArray;
    // (undocumented)
    transferSyntax: string;
}

// @public (undocumented)
interface WebWorkerDeferredObject<T = unknown> {
    // (undocumented)
    reject: (err: any) => void;
    // (undocumented)
    resolve: (arg: T | PromiseLike<T>) => void;
}

// @public (undocumented)
interface WebWorkerInitializeData {
    // (undocumented)
    config: WebWorkerOptions;
    // (undocumented)
    taskType: 'initialize';
    // (undocumented)
    workerIndex: number;
}

// @public (undocumented)
interface WebWorkerLoadData {
    // (undocumented)
    config: WebWorkerOptions;
    // (undocumented)
    sourcePath: string;
    // (undocumented)
    taskType: 'loadWebWorkerTask';
    // (undocumented)
    workerIndex: number;
}

// @public (undocumented)
interface WebWorkerOptions {
    // (undocumented)
    maxWebWorkers?: number;
    // (undocumented)
    startWebWorkersOnDemand?: boolean;
    // (undocumented)
    taskConfiguration?: WebWorkerTaskOptions;
    // (undocumented)
    webWorkerTaskPaths?: string[];
}

// @public (undocumented)
interface WebWorkerResponse {
    // (undocumented)
    data?: Types_2.IImageFrame;
    // (undocumented)
    result: string | Types_2.IImageFrame;
    // (undocumented)
    status: 'failed' | 'success';
    // (undocumented)
    taskType: WorkerTaskTypes;
    // (undocumented)
    workerIndex: number;
}

// @public (undocumented)
interface WebWorkerTaskOptions {
    // (undocumented)
    decodeTask: WebWorkerDecodeConfig;
}

// @public (undocumented)
interface WorkerTask {
    // (undocumented)
    added: number;
    // (undocumented)
    data: WebWorkerDecodeTaskData;
    // (undocumented)
    deferred: WebWorkerDeferredObject;
    // (undocumented)
    priority: number;
    // (undocumented)
    start?: number;
    // (undocumented)
    status: 'ready' | 'success' | 'failed';
    // (undocumented)
    taskId: number;
    // (undocumented)
    taskType: WorkerTaskTypes;
    // (undocumented)
    transferList: Transferable[];
}

// @public (undocumented)
type WorkerTaskTypes = 'decodeTask' | 'loadWebWorkerTask' | 'initialize';

// (No @packageDocumentation comment for this package)

```