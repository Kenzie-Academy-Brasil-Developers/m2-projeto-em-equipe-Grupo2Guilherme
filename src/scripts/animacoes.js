const itens = document.querySelectorAll('[data-anime]');

const animacaoScroll = () =>
{
    const windowTop = window.pageYOffset + window.innerHeight * .85;
    
    itens.forEach(element =>
    {
        if(windowTop > element.offsetTop)
        {
            element.classList.add('animate');
        }else
        {
            element.classList.remove('animate');
        }
    })
}
animacaoScroll();

window.addEventListener('scroll', () =>
{
    animacaoScroll();
})