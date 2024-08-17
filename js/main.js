document.querySelectorAll("div#menu>nav>ul>li").forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    elem.className = "bg-yellow text-dark";
  });
  elem.addEventListener("mouseleave", () => {
    elem.className = "";
  });
});

document.querySelectorAll("div#form>div>input").forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    elem.className = "input-2";
  });
  elem.addEventListener("mouseleave", () => {
    elem.className = "input";
  });
});
// POST data
const submitCustomer = async () => {
  try {
    let firstName = document.querySelector("input[name=firstName]").value;
    let lastName = document.querySelector("input[name=lastName]").value;
    let email = document.querySelector("input[name=email]").value;
    let comment = document.querySelector("textarea[name=comment]").value;
    let id = 1;
    fetch("http://localhost:3000/costumers", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        comment: comment,
      }),
    });
    id += 1;
    firstName = "";
    lastName = "";
    email = "";
    comment = "";
  } catch (error) {
    alert(error);
  }
};

document
  .querySelector("input[type=submit]")
  .addEventListener("click", submitCustomer);
// end POST data
// accessbility option
let access = document.querySelector("div#access");
access.addEventListener("mouseenter", () => {
  document.querySelector("div#access>h5").style.display = "none";
  document.querySelectorAll("div#access>div").forEach((elem) => {
    elem.style.display = "block";
  });
  document.querySelectorAll("div#access>div").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      elem.style.display = "block";
      elem.style.boxShadow = "5px 5px 5px yellow";
      elem.style.marginBottom = "5px";
      elem.style.borderRadius = "10px";
      elem.style.scale = "1.1 1.1 ";
    });
  });
  document.querySelectorAll("div#access>div").forEach((elem) => {
    elem.addEventListener("mouseleave", () => {
      elem.style.boxShadow = "unset";
      elem.style.marginBottom = "unset";
      elem.style.borderRadius = "unset";
      elem.style.scale = "unset";
    });
  });
});
access.addEventListener("mouseleave", () => {
  document.querySelector("div#access>h5").style.display = "inline-block";
  document.querySelectorAll("div#access>div").forEach((elem) => {
    elem.style.display = "none";
  });
});
// end accessbility option
// fetching products data
const productsData = async () => {
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  let html = "";
  data.forEach((elem) => {
    html += `<div name="kala">
    <div></div>
    <h1>${elem.title}</h1>
    <img src="${elem.img}" alt="${elem.alt}"/>
    <p>${elem.decription}</p>
    <div></div>
    </div>
    `;
  });
  document.querySelector("div#products").innerHTML = html;
};
productsData();
// end fetching products data
const footerData = async () => {
  let response = await fetch("http://localhost:3000/footer");
  let data = await response.json();
  let html = "<h1>terms of service !</h1>";
  data.forEach((elem) => {
    html += `<div name="agreements">
    <p>${elem.body}</p>
    <img src="${elem.img}" alt="test"/>
    <div name="agree">
    <label for="agreed">agreed ?</label>
    <input type="checkbox"/>
    </div>
    </div> `;
  });
  html += `<div name="footer">
    <email>email : t@t.com</email>
    <adress>adress : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis minus harum magni tempora autem voluptatum</adress>
    <p>all rights are recived by Amirhossein Goudarzi &copy;</p>
  </div>`;
  document.querySelector("div#footer").innerHTML = html;
};
footerData();
// ********************************
// light mode settings

document
  .querySelector("div#access>div[name=light-mode]")
  .addEventListener("click", () => {
    access.style.backgroundColor = "black";
    access.style.color = "white";
    document.querySelectorAll("input").forEach((elem) => {
      elem.style.color = "black";
    });
    document.querySelector(
      "div#root>div:nth-of-type(1)"
    ).style.backgroundImage = "none";
    document.querySelector(
      "div#root>div:nth-of-type(1)"
    ).style.backgroundColor = "grey";
    document.querySelectorAll("div#footer>div>p").forEach(function (elem) {
      elem.style.color = "black";
    });
    document.querySelector("div#footer").style.backgroundColor = "#d3d3d3";
    document.querySelectorAll("h1").forEach(function (elem) {
      elem.style.color = "black";
    });
    document.querySelector("div#products").style.backgroundColor = "white";
    document.querySelector("div#about").style.backgroundColor = "#d3d3d3";
    document.querySelectorAll("div#about>div>p").forEach(function (elem) {
      elem.style.color = "black";
    });
    document.querySelector("div#menu").style.backgroundColor = "#d3d3d3";
    document.querySelectorAll("div#menu>nav>ul>li").forEach((elem) => {
      elem.style.color = "black";
    });
    document.querySelectorAll("div#access>div").forEach((elem) => {
      elem.style.backgroundColor = "#2b2b2b";
      elem.style.color = "white";
      document.querySelectorAll("div#access>div>a").forEach(function (e) {
        e.style.color = "white";
      });
    });
  });
// end light mode settings
// dark mode settings
document
  .querySelector("div#access>div[name=dark-mode]")
  .addEventListener("click", () => {
    document.querySelector("div#menu").style.backgroundColor = "#2b2b2b";
    document.querySelectorAll("div#menu>nav>ul>li").forEach((elem) => {
      elem.style.color = "whitesmoke";
    });
    access.style.backgroundColor = "whitesmoke";
    access.style.color = "black";
    document.querySelectorAll("input").forEach((elem) => {
      elem.style.color = "whitesmoke";
    });
    document.querySelectorAll("div#access>div").forEach((elem) => {
      elem.style.backgroundColor = "#d3d3d3";
      elem.style.color = "black";
    });
    document.querySelectorAll("div#access>div>a").forEach(function (e) {
      e.style.color = "black";
    });
    document.querySelectorAll("div#about>div>p").forEach(function (elem) {
      elem.style.color = "white";
    });
    document.querySelector("div#products").style.backgroundColor = "#d3d3d3";
    document.querySelector("div#about").style.backgroundColor = "#2b2b2b";
    document.querySelectorAll("h1").forEach(function (elem) {
      elem.style.color = "whitesmoke";
    });
    document.querySelector("div#footer").style.backgroundColor = "#2b2b2b";
    document.querySelectorAll("div#footer>div>p").forEach(function (elem) {
      elem.style.color = "whitesmoke";
    });
    document.querySelector(
      "div#root>div:nth-of-type(1)"
    ).style.backgroundImage = `url("https://w0.peakpx.com/wallpaper/353/126/HD-wallpaper-dark-abstract-black-minimal-abstract-dark-black-minimalism-minimalist.jpg")`;
    document.querySelector(
      "div#root>div:nth-of-type(1)"
    ).style.backgroundColor = "#2b2b2b";
  });
// end dark mode settings
