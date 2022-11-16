import {EventEmitter} from './EventEmitter'
interface TextInputEvents {
  textInputDidFocus: (focusedTextInputId: number) => void
  textInputDidBlur: (focusedTextInputId: number) => void
}
export declare function hijackTextInputEvents(): EventEmitter<TextInputEvents>
export {}
