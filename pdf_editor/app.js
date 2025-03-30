
// pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

// const elements = {
//   canvas: document.getElementById('pdf-canvas'),
//   container: document.querySelector('.canvas-container'),
//   upload: document.getElementById('pdf-upload'),
//   openBtn: document.getElementById('open-btn'),
//   highlightBtn: document.getElementById('highlight-btn'),
//   textBtn: document.getElementById('text-btn'),
//   saveBtn: document.getElementById('save-btn'),
//   clearBtn: document.getElementById('clear-btn'),
//   prevPageBtn: document.getElementById('prev-page'),
//   nextPageBtn: document.getElementById('next-page'),
//   pageNum: document.getElementById('page-num'),
//   pdfInfo: document.getElementById('pdf-info'),
//   zoomIn: document.getElementById('zoom-in'),
//   zoomOut: document.getElementById('zoom-out'),
//   zoomReset: document.getElementById('zoom-reset'),
//   zoomLevel: document.getElementById('zoom-level'),
//   highlightColor: document.getElementById('highlight-color'),
//   highlightOpacity: document.getElementById('highlight-opacity'),
//   highlightWidth: document.getElementById('highlight-width'),
//   textColor: document.getElementById('text-color'),
//   textFont: document.getElementById('text-font'),
//   textSize: document.getElementById('text-size')
// };

// const canvas = new fabric.Canvas(elements.canvas, {
//   selection: false,
//   preserveObjectStacking: true
// });

// const state = {
//   pdfDoc: null,
//   currentPage: 1,
//   isHighlighting: false,
//   isAddingText: false,
//   startPoint: null,
//   scale: 1.0,
//   minScale: 0.25,
//   maxScale: 3.0,
//   scaleStep: 0.25,
//   pdfImage: null,
//   renderTask: null
// };

// function init() {
//   // Ensure container fills the available space
//   if (elements.container) {
//     elements.container.style.width = window.innerWidth + 'px';
//     elements.container.style.height = (window.innerHeight - 60) + 'px'; // toolbar approx. 60px
//   }
//   setupEventListeners();
//   updateZoomDisplay();
//   window.addEventListener('resize', handleResize);
// }

// // Set up event listeners
// function setupEventListeners() {
//   elements.openBtn.addEventListener('click', () => elements.upload.click());
//   elements.upload.addEventListener('change', handleFileSelect);
//   elements.highlightBtn.addEventListener('click', toggleHighlighting);
//   elements.textBtn.addEventListener('click', toggleTextAdding);
//   elements.saveBtn.addEventListener('click', savePDF);
//   elements.clearBtn.addEventListener('click', clearAnnotations);
//   elements.prevPageBtn.addEventListener('click', prevPage);
//   elements.nextPageBtn.addEventListener('click', nextPage);
//   elements.zoomIn.addEventListener('click', zoomIn);
//   elements.zoomOut.addEventListener('click', zoomOut);
//   elements.zoomReset.addEventListener('click', zoomReset);
  
//   canvas.on('mouse:down', startAction);
//   canvas.on('mouse:move', continueAction);
//   canvas.on('mouse:up', endAction);
// }

// // Handle PDF file selection
// function handleFileSelect(event) {
//   const file = event.target.files[0];
//   if (!file) return;
  
//   const fileReader = new FileReader();
//   fileReader.onload = function() {
//     loadPDF(new Uint8Array(this.result));
//   };
//   fileReader.readAsArrayBuffer(file);
// }

// // Load PDF document
// function loadPDF(data) {
//   if (state.renderTask) state.renderTask.cancel();
  
//   const loadingTask = pdfjsLib.getDocument(data);
//   loadingTask.promise.then(function(pdf) {
//     state.pdfDoc = pdf;
//     elements.pdfInfo.textContent = `PDF loaded: ${pdf.numPages} page(s)`;
//     calculateInitialScale();
//   }).catch(function(error) {
//     console.error('PDF loading error:', error);
//     elements.pdfInfo.textContent = 'Error loading PDF';
//   });
// }

// // Calculate initial scale to fit the PDF page within the container
// function calculateInitialScale() {
//   if (!state.pdfDoc) return;
  
//   state.pdfDoc.getPage(1).then(function(page) {
//     const unscaledViewport = page.getViewport({ scale: 1.0 });
//     const containerWidth = elements.container.clientWidth;
//     const containerHeight = elements.container.clientHeight;
//     const widthScale = containerWidth / unscaledViewport.width;
//     const heightScale = containerHeight / unscaledViewport.height;
//     state.scale = Math.min(widthScale, heightScale);
//     updateZoomDisplay();
//     renderPage(1);
//   });
// }

// // Render a specific page; canvas dimensions match the PDF page
// function renderPage(pageNum) {
//   if (!state.pdfDoc) return;
  
//   state.currentPage = Math.max(1, Math.min(pageNum, state.pdfDoc.numPages));
//   elements.pageNum.textContent = `Page: ${state.currentPage} of ${state.pdfDoc.numPages}`;
  
//   if (state.renderTask) state.renderTask.cancel();
  
//   state.pdfDoc.getPage(state.currentPage).then(function(page) {
//     const viewport = page.getViewport({ scale: state.scale });
    
//     // Set canvas dimensions to PDF page size
//     elements.canvas.width = viewport.width;
//     elements.canvas.height = viewport.height;
//     canvas.setWidth(viewport.width);
//     canvas.setHeight(viewport.height);
    
//     // Create offscreen canvas for PDF rendering
//     const pdfCanvas = document.createElement('canvas');
//     pdfCanvas.height = viewport.height;
//     pdfCanvas.width = viewport.width;
    
//     state.renderTask = page.render({
//       canvasContext: pdfCanvas.getContext('2d'),
//       viewport: viewport
//     });
    
//     state.renderTask.promise.then(function() {
//       // Remove previous PDF image if it exists
//       if (state.pdfImage) {
//         canvas.remove(state.pdfImage);
//       }
      
//       // Create fabric.Image from the rendered PDF
//       state.pdfImage = new fabric.Image(pdfCanvas, {
//         left: 0,
//         top: 0,
//         selectable: false,
//         evented: false,
//         hasControls: false,
//         hasBorders: false
//       });
      
//       // Add PDF image to canvas and send it to back
//       canvas.add(state.pdfImage);
//       state.pdfImage.sendToBack();
//       canvas.renderAll();
//     });
//   });
// }

// // Zoom functions (update scale and re-render)
// function zoomIn() {
//   if (state.scale < state.maxScale) {
//     state.scale = Math.min(state.maxScale, state.scale + state.scaleStep);
//     updateZoomDisplay();
//     renderPage(state.currentPage);
//   }
// }

// function zoomOut() {
//   if (state.scale > state.minScale) {
//     state.scale = Math.max(state.minScale, state.scale - state.scaleStep);
//     updateZoomDisplay();
//     renderPage(state.currentPage);
//   }
// }

// function zoomReset() {
//   calculateInitialScale();
// }

// function updateZoomDisplay() {
//   elements.zoomLevel.textContent = `${Math.round(state.scale * 100)}%`;
// }

// // Handle window resize (update container dimensions)
// function handleResize() {
//   if (elements.container) {
//     elements.container.style.width = window.innerWidth + 'px';
//     elements.container.style.height = (window.innerHeight - 60) + 'px';
//   }
//   // Optionally, recalculate scale or leave current zoom level
// }

// // Page navigation
// function prevPage() {
//   if (state.pdfDoc && state.currentPage > 1) {
//     renderPage(state.currentPage - 1);
//   }
// }

// function nextPage() {
//   if (state.pdfDoc && state.currentPage < state.pdfDoc.numPages) {
//     renderPage(state.currentPage + 1);
//   }
// }

// // Toggle highlighting mode
// function toggleHighlighting() {
//   state.isHighlighting = !state.isHighlighting;
//   state.isAddingText = false;
//   elements.highlightBtn.classList.toggle('active', state.isHighlighting);
//   elements.textBtn.classList.remove('active');
//   canvas.defaultCursor = state.isHighlighting ? 'crosshair' : 'default';
// }

// // Toggle text adding mode
// function toggleTextAdding() {
//   state.isAddingText = !state.isAddingText;
//   state.isHighlighting = false;
//   elements.textBtn.classList.toggle('active', state.isAddingText);
//   elements.highlightBtn.classList.remove('active');
//   canvas.defaultCursor = state.isAddingText ? 'text' : 'default';
// }

// // Start drawing action (highlight rectangle or add text)
// function startAction(options) {
//   if (!state.isHighlighting && !state.isAddingText) return;
  
//   const pointer = canvas.getPointer(options.e);
//   state.startPoint = pointer;
  
//   if (state.isHighlighting) {
//     const rect = new fabric.Rect({
//       left: pointer.x,
//       top: pointer.y,
//       width: 0,
//       height: parseInt(elements.highlightWidth.value),
//       fill: elements.highlightColor.value,
//       opacity: parseFloat(elements.highlightOpacity.value),
//       selectable: false,
//       hoverCursor: 'default',
//       hasControls: false,
//       hasBorders: false
//     });
//     canvas.add(rect);
//     canvas.setActiveObject(rect);
//   } else if (state.isAddingText) {
//     const text = new fabric.Textbox('Type here', {
//       left: pointer.x,
//       top: pointer.y,
//       fontSize: parseInt(elements.textSize.value),
//       fontFamily: elements.textFont.value,
//       fill: elements.textColor.value,
//       width: 200,
//       editable: true,
//       hasControls: true
//     });
//     canvas.add(text);
//     canvas.setActiveObject(text);
//     text.enterEditing();
//     text.selectAll();
//   }
// }

// // Continue drawing (for highlights)
// function continueAction(options) {
//   if (!state.isHighlighting || !state.startPoint || canvas.getActiveObjects().length === 0) return;
  
//   const pointer = canvas.getPointer(options.e);
//   const activeObj = canvas.getActiveObjects()[0];
  
//   if (activeObj && activeObj.type === 'rect') {
//     activeObj.set({
//       width: pointer.x - state.startPoint.x,
//       height: parseInt(elements.highlightWidth.value)
//     });
//     canvas.renderAll();
//   }
// }

// function endAction() {
//   state.startPoint = null;
// }

// // Save PDF with annotations using jsPDF
// function savePDF() {
//   if (!state.pdfDoc) {
//     alert('No PDF loaded');
//     return;
//   }
  
//   const { jsPDF } = window.jspdf;
//   const pdf = new jsPDF({
//     orientation: elements.canvas.width > elements.canvas.height ? 'landscape' : 'portrait',
//     unit: 'px'
//   });
  
//   pdf.addImage(elements.canvas, 'PNG', 0, 0, elements.canvas.width, elements.canvas.height);
//   pdf.save('annotated.pdf');
// }

// // Clear all annotations except the PDF image
// function clearAnnotations() {
//   if (!confirm('Are you sure you want to clear all annotations?')) return;
  
//   const objects = canvas.getObjects();
//   objects.forEach(obj => {
//     if (obj !== state.pdfImage) {
//       canvas.remove(obj);
//     }
//   });
//   canvas.renderAll();
// }

// init();



pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

const elements = {
  canvas: document.getElementById('pdf-canvas'),
  container: document.querySelector('.canvas-container'),
  upload: document.getElementById('pdf-upload'),
  openBtn: document.getElementById('open-btn'),
  highlightBtn: document.getElementById('highlight-btn'),
  textBtn: document.getElementById('text-btn'),
  saveBtn: document.getElementById('save-btn'),
  clearBtn: document.getElementById('clear-btn'),
  prevPageBtn: document.getElementById('prev-page'),
  nextPageBtn: document.getElementById('next-page'),
  pageNum: document.getElementById('page-num'),
  pdfInfo: document.getElementById('pdf-info'),
  zoomIn: document.getElementById('zoom-in'),
  zoomOut: document.getElementById('zoom-out'),
  zoomReset: document.getElementById('zoom-reset'),
  zoomLevel: document.getElementById('zoom-level'),
  highlightColor: document.getElementById('highlight-color'),
  highlightOpacity: document.getElementById('highlight-opacity'),
  highlightWidth: document.getElementById('highlight-width'),
  textColor: document.getElementById('text-color'),
  textFont: document.getElementById('text-font'),
  textSize: document.getElementById('text-size')
};

const canvas = new fabric.Canvas(elements.canvas, {
  selection: false,
  preserveObjectStacking: true
});

const state = {
  pdfDoc: null,
  currentPage: 1,
  isHighlighting: false,
  isAddingText: false,
  startPoint: null,
  scale: 1.0,
  minScale: 0.25,
  maxScale: 3.0,
  scaleStep: 0.25,
  pdfImage: null,
  renderTask: null
};

function init() {
  // Ensure container fills the available space
  if (elements.container) {
    elements.container.style.width = window.innerWidth + 'px';
    elements.container.style.height = (window.innerHeight - 60) + 'px'; // toolbar approx. 60px
  }
  setupEventListeners();
  updateZoomDisplay();
  window.addEventListener('resize', handleResize);
}

function setupEventListeners() {
  elements.openBtn.addEventListener('click', () => elements.upload.click());
  elements.upload.addEventListener('change', handleFileSelect);
  elements.highlightBtn.addEventListener('click', toggleHighlighting);
  elements.textBtn.addEventListener('click', toggleTextAdding);
  elements.saveBtn.addEventListener('click', savePDF);
  elements.clearBtn.addEventListener('click', clearAnnotations);
  elements.prevPageBtn.addEventListener('click', prevPage);
  elements.nextPageBtn.addEventListener('click', nextPage);
  elements.zoomIn.addEventListener('click', zoomIn);
  elements.zoomOut.addEventListener('click', zoomOut);
  elements.zoomReset.addEventListener('click', zoomReset);
  
  // For highlighting we use mouse:down, mouse:move, mouse:up events.
  canvas.on('mouse:down', startAction);
  canvas.on('mouse:move', continueAction);
  canvas.on('mouse:up', endAction);
  // For adding text, listen to double-click events.
  canvas.on('mouse:dblclick', addTextAction);
}

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const fileReader = new FileReader();
  fileReader.onload = function() {
    loadPDF(new Uint8Array(this.result));
  };
  fileReader.readAsArrayBuffer(file);
}

function loadPDF(data) {
  if (state.renderTask) state.renderTask.cancel();
  
  const loadingTask = pdfjsLib.getDocument(data);
  loadingTask.promise.then(function(pdf) {
    state.pdfDoc = pdf;
    elements.pdfInfo.textContent = `PDF loaded: ${pdf.numPages} page(s)`;
    calculateInitialScale();
  }).catch(function(error) {
    console.error('PDF loading error:', error);
    elements.pdfInfo.textContent = 'Error loading PDF';
  });
}

// Calculate initial scale to fit the PDF page within the container
function calculateInitialScale() {
  if (!state.pdfDoc) return;
  
  state.pdfDoc.getPage(1).then(function(page) {
    const unscaledViewport = page.getViewport({ scale: 1.0 });
    const containerWidth = elements.container.clientWidth;
    const containerHeight = elements.container.clientHeight;
    const widthScale = containerWidth / unscaledViewport.width;
    const heightScale = containerHeight / unscaledViewport.height;
    state.scale = Math.min(widthScale, heightScale);
    updateZoomDisplay();
    renderPage(1);
  });
}

function renderPage(pageNum) {
  if (!state.pdfDoc) return;
  
  state.currentPage = Math.max(1, Math.min(pageNum, state.pdfDoc.numPages));
  elements.pageNum.textContent = `Page: ${state.currentPage} of ${state.pdfDoc.numPages}`;
  
  if (state.renderTask) state.renderTask.cancel();
  
  state.pdfDoc.getPage(state.currentPage).then(function(page) {
    const viewport = page.getViewport({ scale: state.scale });
    
    // Set canvas dimensions to PDF page size
    elements.canvas.width = viewport.width;
    elements.canvas.height = viewport.height;
    canvas.setWidth(viewport.width);
    canvas.setHeight(viewport.height);
    
    // Create offscreen canvas for PDF rendering
    const pdfCanvas = document.createElement('canvas');
    pdfCanvas.height = viewport.height;
    pdfCanvas.width = viewport.width;
    
    state.renderTask = page.render({
      canvasContext: pdfCanvas.getContext('2d'),
      viewport: viewport
    });
    
    state.renderTask.promise.then(function() {
      if (state.pdfImage) {
        canvas.remove(state.pdfImage);
      }
      
      state.pdfImage = new fabric.Image(pdfCanvas, {
        left: 0,
        top: 0,
        selectable: false,
        evented: false,
        hasControls: false,
        hasBorders: false
      });
      
      canvas.add(state.pdfImage);
      state.pdfImage.sendToBack();
      canvas.renderAll();
    });
  });
}

function zoomIn() {
  if (state.scale < state.maxScale) {
    state.scale = Math.min(state.maxScale, state.scale + state.scaleStep);
    updateZoomDisplay();
    renderPage(state.currentPage);
  }
}

function zoomOut() {
  if (state.scale > state.minScale) {
    state.scale = Math.max(state.minScale, state.scale - state.scaleStep);
    updateZoomDisplay();
    renderPage(state.currentPage);
  }
}

function zoomReset() {
  calculateInitialScale();
}

function updateZoomDisplay() {
  elements.zoomLevel.textContent = `${Math.round(state.scale * 100)}%`;
}

function handleResize() {
  if (elements.container) {
    elements.container.style.width = window.innerWidth + 'px';
    elements.container.style.height = (window.innerHeight - 60) + 'px';
  }
}

// Page navigation functions
function prevPage() {
  if (state.pdfDoc && state.currentPage > 1) {
    renderPage(state.currentPage - 1);
  }
}

function nextPage() {
  if (state.pdfDoc && state.currentPage < state.pdfDoc.numPages) {
    renderPage(state.currentPage + 1);
  }
}

// Toggle modes
function toggleHighlighting() {
  state.isHighlighting = !state.isHighlighting;
  state.isAddingText = false;
  elements.highlightBtn.classList.toggle('active', state.isHighlighting);
  elements.textBtn.classList.remove('active');
  canvas.defaultCursor = state.isHighlighting ? 'crosshair' : 'default';
}

function toggleTextAdding() {
  state.isAddingText = !state.isAddingText;
  state.isHighlighting = false;
  elements.textBtn.classList.toggle('active', state.isAddingText);
  elements.highlightBtn.classList.remove('active');
  canvas.defaultCursor = state.isAddingText ? 'text' : 'default';
}

// For highlighting, use mouse:down, mouse:move, and mouse:up events.
function startAction(options) {
  if (!state.isHighlighting) return;
  
  const pointer = canvas.getPointer(options.e);
  state.startPoint = pointer;
  
  const rect = new fabric.Rect({
    left: pointer.x,
    top: pointer.y,
    width: 0,
    height: parseInt(elements.highlightWidth.value),
    fill: elements.highlightColor.value,
    opacity: parseFloat(elements.highlightOpacity.value),
    selectable: false,
    hoverCursor: 'default',
    hasControls: false,
    hasBorders: false
  });
  canvas.add(rect);
  canvas.setActiveObject(rect);
}

function continueAction(options) {
  if (!state.isHighlighting || !state.startPoint || canvas.getActiveObjects().length === 0) return;
  
  const pointer = canvas.getPointer(options.e);
  const activeObj = canvas.getActiveObjects()[0];
  
  if (activeObj && activeObj.type === 'rect') {
    activeObj.set({
      width: pointer.x - state.startPoint.x,
      height: parseInt(elements.highlightWidth.value)
    });
    canvas.renderAll();
  }
}

function endAction() {
  state.startPoint = null;
}

// // For text addition, use double-click event
// function addTextAction(options) {
//   if (!state.isAddingText) return;
  
//   const pointer = canvas.getPointer(options.e);
//   const text = new fabric.Textbox('Type here', {
//     left: pointer.x,
//     top: pointer.y,
//     fontSize: parseInt(elements.textSize.value),
//     fontFamily: elements.textFont.value,
//     fill: elements.textColor.value,
//     width: 200,
//     editable: true,
//     hasControls: true
//   });
//   canvas.add(text);
//   canvas.setActiveObject(text);
//   text.enterEditing();
//   text.selectAll();
// }


// For text addition, use double-click event
function addTextAction(options) {
    if (!state.isAddingText) return;
    
    const pointer = canvas.getPointer(options.e);
    const text = new fabric.Textbox('Type here', {
      left: pointer.x,
      top: pointer.y,
      fontSize: parseInt(elements.textSize.value),
      fontFamily: elements.textFont.value,
      fill: elements.textColor.value,
      width: 200,
      editable: true,
      hasControls: true,
      textAlign: 'left',    // Force left alignment
      originX: 'left',      // Ensure origin is on the left side
      originY: 'top',       // Ensure origin is on the top
      padding: 5,           // Add a little padding for better cursor alignment
      cursorColor: elements.textColor.value
    });
    
    canvas.add(text);
    canvas.setActiveObject(text);
    // Start editing with the entire text selected so you can immediately type over it.
    text.enterEditing();
    text.selectAll();
  }
  

function savePDF() {
  if (!state.pdfDoc) {
    alert('No PDF loaded');
    return;
  }
  
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({
    orientation: elements.canvas.width > elements.canvas.height ? 'landscape' : 'portrait',
    unit: 'px'
  });
  
  pdf.addImage(elements.canvas, 'PNG', 0, 0, elements.canvas.width, elements.canvas.height);
  pdf.save('annotated.pdf');
}

function clearAnnotations() {
  if (!confirm('Are you sure you want to clear all annotations?')) return;
  
  const objects = canvas.getObjects();
  objects.forEach(obj => {
    if (obj !== state.pdfImage) {
      canvas.remove(obj);
    }
  });
  canvas.renderAll();
}

init();

