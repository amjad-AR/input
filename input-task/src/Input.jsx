import React, { useState } from "react";

function Input() {
  const [name, setName] = useState("Your name");
  const [isClick, setIsClick] = useState(false);
  const [savedName, setSavedName] = useState([]);

  const handleFocus = () => {
    if (name === "Your name") {
      setName("");
    }
  };

  const handleBlur = () => {
    if (name === "") {
      setName("Your name");
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && name !== "Your name") {
      setSavedName((p) => [...p, name]);
      setIsClick(true);
    }
    };
    
    const handelDelete = (e) => {
        e.preventDefault()
        setSavedName([])
        setIsClick(false)
    }

    const handelDelOne = (indexDelete) => {
        setSavedName((e) => e.filter((_, index) => index !== indexDelete));
    }

  return (
    <form
      action=""
      className="w-[50%] h-[50%] bg-gray-700 flex flex-col items-center gap-2.5 rounded-2xl shadow-2xl text-amber-50 text-2xl"
    >
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="bg-blue-500"
      ></input>
      <p>Name: {name}</p>
      <div className="w-[50%] flex justify-between">
        <button
          type="button"
          onClick={handleSave}
          className="cursor-pointer bg-emerald-600 w-[30%] rounded-3xl hover:scale-1.1"
        >
          Save
        </button>
        <button
          className="cursor-pointer bg-red-800 w-[30%] rounded-3xl hover:scale-1.1"
          type="button"
          onClick={handelDelete}
        >
          Delete
        </button>
      </div>
      {savedName.length > 0 && (
        <div className="mt-4 w-[80%] ">
          <h3 className="font-bold mb-2">Saved Names:</h3>
          <div className="list-disc list-inside flex flex-col justify-around">
            {savedName.map((n, index) => (
              <p key={index} className="mb-4">
                {n}{" "}
                <button
                  className="cursor-pointer bg-red-800 w-[20%] rounded-3xl hover:scale-1.1"
                  onClick={() => handelDelOne(index)}
                >
                  del
                </button>
              </p>
            ))}
          </div>
        </div>
      )}
    </form>
  );
}

export default Input;
