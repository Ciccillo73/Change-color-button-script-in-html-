document.addEventListener('DOMContentLoaded', () =>{
  console.log('Java has loaded');
  const button = document.querySelector('#button');
  button.addEventListener('click', handleClick);

})

const handleClick = function(){
  const colors = ['pink','blue','black','rose','violet'];
  const randomIndex = parseInt(Math.random() * (colors.length + 1));
  const changeBackground = colors[randomIndex];

  const result = document.querySelector('body')
  result.style.backgroundColor = changeBackground;
}
