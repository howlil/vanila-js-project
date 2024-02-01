const addToDisplay = () => {
    const aktivitas = document.getElementById("input1").value;
    const newDiv = document.createElement("div");
    newDiv.className = "text";
    newDiv.innerHTML = `
    <h5 class="text-display">${aktivitas}</h5>`;

    const checkboxDiv = document.createElement("div");
    checkboxDiv.className = "icon";
    checkboxDiv.innerHTML = '  <i class="fas fa-check"></i>';

    const wrapper = document.createElement("div");
    wrapper.className = "wrap";
    wrapper.appendChild(newDiv);
    wrapper.appendChild(checkboxDiv);

    if (aktivitas === "") {
      alert("isi dulu bos");
    } else {

      document.getElementById("container").appendChild(wrapper);
    
    }
    input.value = "";
  };
