document.addEventListener('DOMContentLoaded',() => {
  console.log('JavaScript has been loaded')

  const button = document.querySelector('button');
  button.addEventListener('click', handleClick)

  const body = document.querySelector('body')


  const colors = ['blue', 'purple', 'black', 'orange']
});

function handleClick(){
  body.backgroundColor ='red';
}
