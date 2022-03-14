import { RenderingEngine, Types, VIEWPORT_TYPE } from '@precisionmetrics/cornerstone-render'
import { initDemo, createImageIdsAndCacheMetaData, setTitleAndDescription } from '../../../../utils/demo/helpers'
import * as cornerstoneTools from '@precisionmetrics/cornerstone-tools'

const { PanTool, WindowLevelTool, StackScrollMouseWheelTool, ZoomTool, ToolGroupManager, ToolBindings } =
  cornerstoneTools

// ======== Set up page ======== //
setTitleAndDescription('Basic Stack Manipulation', 'Manipulation tools for a stack viewport')

const content = document.getElementById('content')
const element = document.createElement('div')

// Disable right click context menu so we can have right click tools
element.oncontextmenu = (e) => e.preventDefault()

element.id = 'cornerstone-element'
element.style.width = '500px'
element.style.height = '500px'

content.appendChild(element)

const instructions = document.createElement('p')
instructions.innerText = 'Left Click: Window/Level\nMiddle Click: Pan\nRight Click: Zoom\n Mouse Wheel: Stack Scroll'

content.append(instructions)
// ============================= //

/**
 * Runs the demo
 */
async function run() {
  // Init Cornerstone and related libraries
  await initDemo()

  const toolGroupUID = 'STACK_TOOL_GROUP_UID'

  // Add tools to Cornerstone3D
  cornerstoneTools.addTool(PanTool, {})
  cornerstoneTools.addTool(WindowLevelTool, {})
  cornerstoneTools.addTool(StackScrollMouseWheelTool, {})
  cornerstoneTools.addTool(ZoomTool, {})

  // Define a tool group, which defines how mouse events map to tool commands for
  // Any viewport using the group
  const toolGroup = ToolGroupManager.createToolGroup(toolGroupUID)

  // Add tools to the tool group
  toolGroup.addTool('WindowLevel', {})
  toolGroup.addTool('Pan', {})
  toolGroup.addTool('Zoom', {})
  toolGroup.addTool('StackScrollMouseWheel', {})

  // Set the initial state of the tools, here all tools are active and bound to
  // Different mouse inputs
  toolGroup.setToolActive('WindowLevel', {
    bindings: [
      {
        mouseButton: ToolBindings.Mouse.Primary, // Left Click
      },
    ],
  })
  toolGroup.setToolActive('Pan', {
    bindings: [
      {
        mouseButton: ToolBindings.Mouse.Auxiliary, // Middle Click
      },
    ],
  })
  toolGroup.setToolActive('Zoom', {
    bindings: [
      {
        mouseButton: ToolBindings.Mouse.Secondary, // Right Click
      },
    ],
  })
  // As the Stack Scroll mouse wheel is a tool using the `mouseWheelCallback`
  // hook instead of mouse buttons, it does not need to assign any mouse button.
  toolGroup.setToolActive('StackScrollMouseWheel')

  // Get Cornerstone imageIds and fetch metadata into RAM
  const imageIds = await createImageIdsAndCacheMetaData({
    StudyInstanceUID: '1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463',
    SeriesInstanceUID: '1.3.6.1.4.1.14519.5.2.1.7009.2403.226151125820845824875394858561',
    wadoRsRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
    type: 'STACK',
  })

  // Instantiate a rendering engine
  const renderingEngineUID = 'myRenderingEngine'
  const renderingEngine = new RenderingEngine(renderingEngineUID)

  // Create a stack viewport
  const viewportUID = 'CT_STACK'
  const viewportInput = {
    viewportUID,
    type: VIEWPORT_TYPE.STACK,
    element,
    defaultOptions: {
      background: [0.2, 0, 0.2],
    },
  }

  renderingEngine.enableElement(viewportInput)

  // Set the tool goup on the viewport
  toolGroup.addViewports(renderingEngineUID, viewportUID)

  // Get the stack viewport that was created
  const viewport = <Types.StackViewport>renderingEngine.getViewport(viewportUID)

  // Define a stack containing a single image
  const stack = [imageIds[0], imageIds[1], imageIds[2]]

  // Set the stack on the viewport
  viewport.setStack(stack)

  // Render the image
  renderingEngine.render()
}

run()