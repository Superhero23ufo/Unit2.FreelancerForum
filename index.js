const state = {
  bank: [],
  evens: [],
  odds: [],
};

const form = document.querySelector("form");

const numberBankOutput = document.querySelector("#numberBank output");

const sortOneBtn = document.querySelector("#sortOne");

const sortAllBtn = document.querySelector("#sortAll");

const oddsOutput = document.querySelector("#odds output");

const evensOutput = document.querySelector("#evens output");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const numberInput = evt.target.number;
  const number = Number(numberInput.value);
  state.bank.push(number);
  numberInput.value = "";
  numberInput.focus();
  render();
});

function sortOne() {
  if (!state.bank.length) {
    return;
  }

  const first = state.bank.shift();
  if (first % 2 === 0) {
    state.evens.push(first);
  } else {
    state.odds.push(first);
  }
  render();
}

sortOneBtn.addEventListener("click", sortOne);

function sortAll() {
  while (state.bank.length) {
    sortOne();
  }
  render();
}

sortAllBtn.addEventListener("click", sortAll);

function render() {
  // The number bank displays all the numbers the user has entered.
  // custom rendering:
  // const numberEls = state.bank.map((number) => {
  //   const bankElement = document.createElement("span");
  //   bankElement.classList.add("number");
  //   bankElement.textContent = number;
  //   return bankElement;
  // });
  // numberBankOutput.replaceChildren(...numberEls);

  // simple rendering:
  numberBankOutput.textContent = state.bank;
  oddsOutput.textContent = state.odds;
  evensOutput.textContent = state.evens;
  console.table(state);
}
