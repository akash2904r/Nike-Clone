export const handleClick = (title, hook, setHook, arr) => {
    let index

    hook.forEach(e => {
      index = hook.findIndex((e) => {
        return e.title == title
      })
    });

    let newHook = [...arr];
    newHook[index].isClicked = !hook[index].isClicked;
    setHook(newHook)
}

export const checkClick = (title, hook) => {
    let index

    hook.forEach(e => {
      index = hook.findIndex((e) => {
        return e.title == title
      })
    });

    return hook[index].isClicked
}