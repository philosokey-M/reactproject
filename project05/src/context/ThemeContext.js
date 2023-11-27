import { createContext } from "react";

export const ThemeContext =createContext(null)
/**
(1) context 생성
export -> context를 외부에서 사용할거야
const ThemeContext -> context 이름은 ThemeContext로 선언할 거야
createContext(null) -> context를 사용할거고,
                        값이 없을 때 기본 값으로 null을 줄거야
                        ** createContext import 해줄 것!
*/
