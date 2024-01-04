import { useState, useRef } from "react";
import { HideButton } from "./generalComponents.js";

function listContainsWord(words, match) {
  let lowerCaseWord = match.toLowerCase();
  return words.filter((curr) => {
    if (!curr) {
      return false;
    }
    return curr.toLowerCase().includes(lowerCaseWord);
  });
}

function listStartsWithWord(words, match) {
  if (typeof match === "undefined") {
    return [];
  }
  let lowerCaseWord = match.toLowerCase();
  return words.filter((curr) => {
    return curr.toLowerCase().startsWith(lowerCaseWord);
  });
}

function AddRemovePlaceButton({ onClick, isAdd, id }) {
  return (
    <div
      className="button add-remove unselectable"
      onClick={() => {
        onClick(id);
      }}
    >
      {isAdd ? "+" : "-"}
    </div>
  );
}

function PlaceInputBar({
  onInput,
  value,
  id,
  inputRef,
  chLimint = "20",
  onEnter,
}) {
  function calculateLength(value) {
    if (value.length === 0) {
      return "2px";
    } else if (value.length > 20) {
      return chLimint + "ch";
    } else {
      return value.length + "ch";
    }
  }
  return (
    <input
      className="place-input"
      style={{ width: calculateLength(value) }}
      onInput={(e) => onInput(id, e.target.value)}
      value={value}
      ref={inputRef}
      onKeyDown={(e) => {
        if (e.key === "Enter" && value !== "") {
          onEnter();
        }
      }}
    />
  );
}

export function PlaceInputWrapper({
  autocompletePlacesOptions,
  onPlaceChange,
}) {
  const [addInput, setAddInput] = useState({ value: "", id: 0 });
  const [inputs, setInputs] = useState([]);
  const [idCount, setId] = useState(1);

  function onAddClick(id) {
    const newInputs = inputs.map((input) => {
      return {
        value: input.value,
        id: input.id,
      };
    });
    newInputs.push({ value: "", id: idCount + 1 });
    setInputs(newInputs);
    setId(idCount + 1);
  }

  function onRemoveClick(id) {
    let newInputs = [];
    for (let input of inputs) {
      if (id === input.id) continue;

      newInputs.push({
        value: input.value,
        id: input.id,
      });
    }
    setInputs(newInputs);
    onPlaceChange([
      { value: addInput.value, id: addInput.id },
      ...newInputs.map((input) => {
        return { value: input.value, id: input.id };
      }),
    ]);
  }

  return (
    <div>
      <div className="sub-text">press enter to autocomplete</div>
      <PlaceInput
        isAdd={true}
        id={addInput.id}
        value={addInput.value}
        onInput={(id, value) => {
          setAddInput({ value, id });
          onPlaceChange([
            { value, id },
            ...inputs.map((input) => {
              return { value: input.value, id: input.id };
            }),
          ]);
        }}
        autocompletePlacesOptions={autocompletePlacesOptions}
        onAddRemoveClick={onAddClick}
      />
      {inputs.map((input) => {
        return (
          <PlaceInput
            isAdd={false}
            id={input.id}
            value={input.value}
            onInput={(id, value) => {
              const newInputs = inputs.map((input) => {
                if (input.id === id) return { value: value, id: id };
                else return { value: input.value, id: input.id };
              });

              setInputs(
                newInputs.map((input) => {
                  return { value: input.value, id: input.id };
                })
              );

              onPlaceChange([
                { value: addInput.value, id: addInput.id },
                ...newInputs,
              ]);
            }}
            autocompletePlacesOptions={autocompletePlacesOptions}
            onAddRemoveClick={onRemoveClick}
            key={input.id}
          />
        );
      })}
    </div>
  );
}

function Autocomplete({ value }) {
  if (value === null) {
    return null;
  }
  return <div className="autocomplete unselectable">{value}</div>;
}

export function PlaceInput({
  value,
  onInput,
  onAddRemoveClick,
  isAdd,
  id,
  autocompletePlacesOptions,
}) {
  const [isHidden, setIsHidden] = useState(true);

  const inputRef = useRef(null);
  function handleAutocompleteClick() {
    inputRef.current.focus();
  }

  function onHideClick() {
    setIsHidden(isHidden ? false : true);
  }

  function onOptionSelectClick(value) {
    onInput(id, value);
    setIsHidden(true);
  }

  function autocompleteStartsWithWord(match, first = false) {
    if (typeof match === "undefined") {
      return [];
    }
    let lowerCaseWord = match.toLowerCase();
    if (!first) {
      return autocompletePlacesOptions.filter((curr) => {
        return curr.name.toLowerCase().startsWith(lowerCaseWord);
      });
    } else {
      return autocompletePlacesOptions.find((curr) => {
        return curr.name.toLowerCase().startsWith(lowerCaseWord);
      });
    }
  }

  let autocompleteValue = null;
  if (value !== "") {
    const firstMatch = autocompleteStartsWithWord(value, true);
    if (typeof firstMatch !== "undefined") {
      autocompleteValue = firstMatch.name.substring(value.length);
    }
  }

  function onEnter() {
    if (autocompleteValue === null) {
      return;
    }
    onInput(id, value + autocompleteValue);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <AddRemovePlaceButton
          onClick={onAddRemoveClick}
          isAdd={isAdd}
          id={id}
        />
        <div className="place-select-bar" onClick={handleAutocompleteClick}>
          <PlaceInputBar
            value={value}
            inputRef={inputRef}
            onInput={onInput}
            id={id}
            onEnter={onEnter}
          />
          <Autocomplete value={autocompleteValue} />
        </div>
        <div className="hide-place-options">
          <HideButton isHidden={isHidden} onClick={onHideClick} />
        </div>
      </div>
      <OptionSelect
        onOptionSelectClick={onOptionSelectClick}
        value={value}
        isHidden={isHidden}
        autocompletePlacesOptions={autocompletePlacesOptions}
      />
    </div>
  );
}

function OptionSelect({
  value,
  isHidden,
  autocompletePlacesOptions,
  onOptionSelectClick,
}) {
  if (typeof value === "undefined") {
    return null;
  }
  function autocompleteContainsWord(match) {
    let lowerCaseWord = match.toLowerCase();
    return autocompletePlacesOptions.filter((curr) => {
      if (!curr) {
        return false;
      }
      return curr.name.toLowerCase().includes(lowerCaseWord);
    });
  }

  return (
    <div className={"all-places unselectable " + (isHidden ? "hidden" : "")}>
      {autocompleteContainsWord(value).map((place, index) => {
        return (
          <div
            className="place-item button"
            key={index}
            onClick={(e) => onOptionSelectClick(e.target.innerHTML)}
          >
            {place.name}
          </div>
        );
      })}
    </div>
  );
}
