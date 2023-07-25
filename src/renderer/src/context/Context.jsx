import React, { createContext, useContext, useReducer, useState } from "react";
// import English from "../lang/en.json";
// import VietNamese from "../lang/vi.json";
// import { IntlProvider } from "react-intl";
import reducer, { initialState } from "../reducer/reducer";

// const LocaleContext = createContext();
const TSCContext = createContext();

// const local = navigator.language;

// let lang;
// if (local === "en") {
//   lang = English;
// } else {
//   lang = VietNamese;
// }

function Provider({ children }) {
  // const [locale, setLocale] = useState(local);
  // const [messages, setMessages] = useState(lang);
  const [state, dispatch] = useReducer(reducer, initialState);

  //Navbar
  // const [activeMenu, setActiveMenu] = useState(true)
  // const [inforBar, setInforBar] = useState(true);

  // const switchInforBar = () => {
  //   setInforBar(!inforBar);
  //   setActiveMenu(!activeMenu);
  // }

  // function selectLanguage(e) {
  //   const newLocale = e;
  //   setLocale(newLocale);
  //   if (newLocale === "en") {
  //     setMessages(English);
  //   } else {
  //     setMessages(VietNamese);
  //   }
  // }

  return (
    <TSCContext.Provider
      value={{
        state,
        dispatch,
        // locale,
        // selectLanguage,
        // inforBar,
        // switchInforBar,
        // activeMenu,
      }}
    >
      {/* <IntlProvider messages={messages} locale={locale}> */}
        {children}
      {/* </IntlProvider> */}
    </TSCContext.Provider>
  );
}
export const useTSCContext = () => {
  return useContext(TSCContext);
};

export { Provider, TSCContext };
