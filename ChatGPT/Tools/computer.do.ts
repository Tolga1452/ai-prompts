/**
 * Tool: computer.do
 * 
 * Description: Perform one or more computer actions in sequence.
 */

interface ComputerDoInput {
    actions: Array<
        | {
              action: "click";
              x: number; // Mouse x position.
              y: number; // Mouse y position.
              button: number; // Mouse button [1-left, 2-wheel, 3-right, 4-back, 5-forward].
              keys?: string[]; // Keys being held while clicking.
          }
        | {
              action: "double_click";
              x: number; // Mouse x position.
              y: number; // Mouse y position.
              button: number; // Mouse button [1-left, 2-wheel, 3-right, 4-back, 5-forward].
              keys?: string[]; // Keys being held while double-clicking.
          }
        | {
              action: "drag";
              path: number[][]; // Path (x, y) coordinates to drag through.
              keys?: string[]; // Keys being held while dragging the mouse.
          }
        | {
              action: "keypress";
              keys: string[]; // Keys pressed with optional modifiers.
          }
        | {
              action: "move";
              x: number; // Mouse x position.
              y: number; // Mouse y position.
              keys?: string[]; // Keys being held while moving the mouse.
          }
        | {
              action: "scroll";
              x: number; // Mouse x position.
              y: number; // Mouse y position.
              scroll_x: number; // Horizontal scrolling.
              scroll_y: number; // Vertical scrolling.
              keys?: string[]; // Keys being held while scrolling.
          }
        | {
              action: "type";
              text: string; // Text for typing.
          }
        | {
              action: "wait";
              // Waits briefly before returning control.
          }
    >; // List of actions to perform.
};
