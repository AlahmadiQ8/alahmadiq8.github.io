let isHomePage = window.location.pathname === '/'
let headerRef = document.getElementById("header-ref")
let avatarRef = document.getElementById("avatar-ref")
let isInitial = true

let downDelay = avatarRef?.offsetTop ?? 0
let upDelay = 64

function setProperty(property, value) {
  document.documentElement.style.setProperty(property, value)
}

function removeProperty(property) {
  document.documentElement.style.removeProperty(property)
}

function updateHeaderStyles() {
  let { top, height } = headerRef.getBoundingClientRect()
  let scrollY = clamp(
    window.scrollY,
    0,
    document.body.scrollHeight - window.innerHeight
  )

  if (isInitial) {
    setProperty('--header-position', 'sticky')
  }

  setProperty('--content-offset', `${downDelay}px`)

  if (isInitial || scrollY < downDelay) {
    setProperty('--header-height', `${downDelay + height}px`)
    setProperty('--header-mb', `${-downDelay}px`)
  } else if (top + height < -upDelay) {
    let offset = Math.max(height, scrollY - upDelay)
    setProperty('--header-height', `${offset}px`)
    setProperty('--header-mb', `${height - offset}px`)
  } else if (top === 0) {
    setProperty('--header-height', `${scrollY + height}px`)
    setProperty('--header-mb', `${-scrollY}px`)
  }

  if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
    setProperty('--header-inner-position', 'fixed')
    removeProperty('--header-top')
    removeProperty('--avatar-top')
  } else {
    removeProperty('--header-inner-position')
    setProperty('--header-top', '0px')
    setProperty('--avatar-top', '0px')
  }
}

function updateAvatarStyles() {
  if (!isHomePage) {
    return
  }

  let fromScale = 1
  let toScale = 36 / 64
  let fromX = 0
  let toX = 2 / 16

  let scrollY = downDelay - window.scrollY

  let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
  scale = clamp(scale, fromScale, toScale)

  let x = (scrollY * (fromX - toX)) / downDelay + toX
  x = clamp(x, fromX, toX)

  setProperty(
    '--avatar-image-transform',
    `translate3d(${x}rem, 0, 0) scale(${scale})`
  )

  let borderScale = 1 / (toScale / scale)
  let borderX = (-toX + x) * borderScale
  let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

  setProperty('--avatar-border-transform', borderTransform)
  setProperty('--avatar-border-opacity', scale === toScale ? 1 : 0)
}

function updateStyles() {
  updateHeaderStyles()
  updateAvatarStyles()
  isInitial = false
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

updateStyles()
window.addEventListener('scroll', updateStyles, { passive: true })
window.addEventListener('resize', updateStyles)


const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

function disableTransitionsTemporarily() {
  document.documentElement.classList.add('[&_*]:!transition-none')
  window.setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none')
  }, 0)
}

function toggleMode() {
  disableTransitionsTemporarily()

  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  let isSystemDarkMode = darkModeMediaQuery.matches
  let isDarkMode = document.documentElement.classList.toggle('dark')

  if (isDarkMode === isSystemDarkMode) {
    delete window.localStorage.isDarkMode
  } else {
    window.localStorage.isDarkMode = isDarkMode
  }
}

const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
      header.querySelector(".up-strut").classList.add("hidden")
    } else {
      accordionContent.style.maxHeight = `0px`;
      header.querySelector(".up-strut").classList.remove("hidden")
    }
  });
});
