// ### Hide messages with delegation

// There’s a list of messages with removal buttons  `[x]`. Make the buttons work.

// Like this:
// ![JavaScript digital clock project](./gif/eventdelegation.gif)

// - ```NOTE: ```  Should be only one event listener on the container, use event delegation.

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  if (event.target.matches(".remove-button")) {
    const pane = event.target.closest(".pane");
    pane.remove();
  }
});
