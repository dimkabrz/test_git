export function ToggleTheme (actualTheme)  {
    const root = document.querySelector(":root");
    if (actualTheme === 'dark') {
           root.style.setProperty("--light-navbar-font", '#463c73');
            root.style.setProperty("--light-mainContainer-font", '#010c1e')
            root.style.setProperty("--dark-mainContainer-font", '#ffffff')
        root.style.setProperty("--dark-h1-color", '#ffffff')

        } else {
              root.style.setProperty("--light-navbar-font",'#b5d6ff');
              root.style.setProperty("--light-mainContainer-font", '#ffffff')
           root.style.setProperty("--dark-mainContainer-font", '#010c1e')
        root.style.setProperty("--dark-h1-color", '#010c1e')

}
}