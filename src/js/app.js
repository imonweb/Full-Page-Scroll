/*  Query selector */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links');
const navBtns = document.querySelectorAll('.navbuttons');
let activeSection;


/*  Helper functions */
// const actionSectionHandler = (currentSectionId) => {
const activeSectionHandler = (currentSectionId) => {
  // console.log(currentSectionId);
  navLinks.forEach(link => {
    // console.log(link.dataset.section);
    if(link.dataset.section == currentSectionId){
      link.classList.add('active');
      return;
    }
    link.classList.remove('active');
  })
  navBtns.forEach(btn => {
   
    if(btn.dataset.section == currentSectionId){
      btn.classList.add('active');
      return;
    }
    btn.classList.remove('active');
  })
}

// set active section
const setActiveSection = (section) => {
  // activeSection = section.target;
  activeSection = section;
  // console.log(activeSection);
}

const showPreviousSection = () => {
  const previousSection = activeSection.previousElementSibling;
  if(previousSection == null ){ return};
  previousSection.scrollIntoView();
}

const showNextSection = () => {
  const nextSection = activeSection.nextElementSibling;
  if(nextSection == null ){ return};
  nextSection.scrollIntoView();
}

const keyEventHandler = (keycode) => {
  // console.log(keycode);
  switch (keycode) {
    case 'ArrowUp':
      // console.log('up');
      showPreviousSection();
      break;
    case 'ArrowDown':
      // console.log('down');
      // key.preventDefault();
      showNextSection();

      break;
    default:
      console.log('How did you get past my if statement?');
  }
}

/*  intersection observer */
const sectionWatcherCallback = (section, sectionWatcher) => {
  section.forEach(section => {
    // console.log(section.isIntersecting);
    if(!section.isIntersecting){return}; 
    // console.log('ya being watched!');
    // console.log(section.target.id);
    activeSectionHandler(section.target.id);
    setActiveSection(section.target);
  })
  
}

const sectionWatcherOptions = {
  threshold: .5
}

const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions)

sections.forEach(section => {
  sectionWatcher.observe(section);
})


/*  event handler for keyboard */
window.addEventListener('keydown', (key) => {
  // console.log(key.keyCode);
  // if(key.keyCode === 38){
  if(key.code === 'ArrowUp'){
    // console.log('you pressed up');
    // keyEventHandler(key.code)
    key.preventDefault();
    keyEventHandler(key.code);
  }
  // if(key.keyCode === 40){
  if(key.code === 'ArrowDown'){
    // console.log('you pressed down');
    key.preventDefault();
    keyEventHandler(key.code);
  }

  return;
})