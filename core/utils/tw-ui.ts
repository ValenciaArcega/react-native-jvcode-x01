import { TextStyle } from "react-native";
/**
 * @author valenciaarcega
 * Whole this set of constants contain the joint tailwind 
 * classes to reuse inside the app interfaces.
 * wr: Wrappers and containers
 * inp: Inputs and text areas
 * btn: Buttons and pressables
 * txt: Labels, titles, paragraphs...
 */
export const wrView = "flex-1 bg-[#fff] dark:bg-[#0A0A0A]";
export const wrMultimedia = "max-w-full min-h-[56px] py-3 bg-[#f2f2f7] dark:bg-[#212529] mt-2 px-4 rounded-xl flex-row items-center";
export const txtMultimedia = "ml-2 font-medium text-p800 dark:text-p100 text-base";
export const separator = "border-b-[1px] border-b-[#eee] dark:border-b-[#444] w-full h-1 my-4";
export const txt = "text-black dark:text-white";
export const wrSwitch = "py-2.5 w-full rounded-xl px-4 mt-8 items-center bg-gray-100 dark:bg-gray900 flex-row justify-between";
export const txtHelperInp = 'text-xs text-gray-400 ml-4 mt-1';

export const wrPass = "flex-row items-center justify-between";

export const wrInpIcon = "flex-row items-center mt-2";
export const inpIcon = "h-14 w-full pr-3 pl-12 text-[18px] rounded-2xl bg-white dark:bg-[#0A0A0A] border-[1px] border-[#ddd] dark:border-gray-700 focus:border-p300 focus:bg-p100 flex dark:focus:bg-gray-900 dark:text-p100";
export const svgInp = "absolute left-5";

export const labelInp = "mt-5 text-[14px] text-black dark:text-gray-100 font-medium";
export const inp = "h-12 w-full mt-2 px-4 text-[18px] rounded-2xl bg-white dark:bg-[#0A0A0A] border-[1.5px] border-[#ddd] dark:border-gray-700 focus:border-p300 focus:bg-p100 flex dark:focus:bg-gray-900 dark:text-p100 opacity-100";
export const inpToken = "h-[92] w-[74px] bg-[#f2f2f7] text-black dark:bg-[#212529] dark:text-white rounded-3xl text-[38px] text-center";
// buttons
export const btnTogglePass = "w-[18%] h-[60px] mt-1 items-center justify-center";
export const btnBase = "min-h-[50px] max-h-[50px] w-full mt-6 rounded-3xl overflow-hidden items-center justify-center bg-black dark:bg-white flex-row";
export const btnSecondary = 'bg-gray-100 border-[1px] border-gray-300 dark:border-gray-500 dark:bg-gray900 rounded-2xl items-center justify-center min-h-[50px] max-h-[50px] mt-6 w-full flex-row';
export const btnDestructive = "h-11 w-[70%] mt-8 px-5 self-center rounded-2xl justify-center bg-gray-50 dark:bg-gray900 border-[1px] border-gray-200 dark:border-gray-600";
export const btnIconTxtIcon = "min-w-[60%] mt-6 h-[56px] bg-[#f2f2f7] dark:bg-[#212529] rounded-xl pl-4 flex-row items-center";
export const btnFloating = "h-16 w-16 rounded-full z-2 absolute bottom-4 right-4 items-center justify-center bg-p700 shadow-md";
// texts
export const txtBtnBase = "text-white dark:text-black text-base ml-2 font-normal";
export const txtBtnSecondary = "text-black dark:text-white text-base ml-2 font-normal";
export const txtBtnIconTxtIcon = "text-[17px] ml-4 dark:text-white";
export const txtTitle = "text-black dark:text-white text-4xl font-semibold tracking-tight";
export const txtDestructive = "text-red-500 dark:text-red-400 text-base";
