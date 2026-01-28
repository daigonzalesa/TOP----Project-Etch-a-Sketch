const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset-btn");
const changeBtn = document.querySelector("#update-grid");



function changeColor (e) 
{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    e.target.classList.add("hovered");
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

changeBtn.addEventListener ("click", () => 
{
    const gridsize = document.querySelector("#grid-size");
    const size=gridsize.value;

    if (size<=100)
    {   
        container.innerHTML = '';

        for (let i = 0; i<(size*size); i++)
        {
            const square = document.createElement("div");
            square.classList.add("squarestyle");
            square.style.flexBasis = `calc(100% / ${size})`;
            square.style.height = `calc(100% / ${size})`;
            container.appendChild(square);
            square.addEventListener("mouseenter", changeColor);
        }
    }
    else 
    {
        alert ("Please enter a number less than 100!"); 
    }
})

function reset ()
{
    const allSquares=document.querySelectorAll(".squarestyle")
    allSquares.forEach((squarestyle) => {
    squarestyle.style.backgroundColor = "";
    });
}

resetBtn.addEventListener("click",reset);