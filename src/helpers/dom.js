export function hasClass(el, className) {
  if (!el) return false
  if (el.classList) {
    return el.classList.contains(className)
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)
  }
}

export function addClass(el, className) {
  if (el) {
    if (el.classList) {
      el.classList.add(className)
    } else {
      el.className += ' ' + className
    }
  }
}

export function removeClass(el, className) {
  if (el) {
    if (el.classList) {
      el.classList.remove(className)
    } else {
      el.className = el.className
        .replace(
          new RegExp(
            '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'
          ), ' '
        )
    }
  }
}

export function removeClassCollection(collection, className) {
  for (let i = 0; i < collection.length; i++) {
    removeClass(collection[i], className);
  }
}

export function addClassToEvent(eventClass, eventType, selectClass, newClass, selectClass2, deleteClass) {
  const classEvent = document.querySelector(`.${eventClass}`);
  classEvent.addEventListener(`${eventType}`, () => {
    const classSelect = document.querySelector(`.${selectClass}`);
    classSelect.classList.toggle(`${newClass}`);
    const classSelect2 = document.querySelector(`.${selectClass2}`);
    classSelect2.classList.remove(`${deleteClass}`);
  });
}

export function addRemoveClass(selectClass, newClass, selectClass2, deleteClass) {
  const classSelect = document.querySelector(`.${selectClass}`);
  classSelect.classList.toggle(`${newClass}`);
  const classSelect2 = document.querySelector(`.${selectClass2}`);
  classSelect2.classList.remove(`${deleteClass}`);
}
