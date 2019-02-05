const conf_class      = '.fill-height';
const conf_breakPoint = 700;

function resizeHandler()
{
  var browserWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  let sizeElements = document.querySelectorAll(conf_class);
  sizeElements.forEach(_e =>
  {
    _e.style.height = '';

    if (browserWidth <= conf_breakPoint)
    {
      return;
    }

    const parent    = _e.parentElement;
    const ht        = parent.clientHeight;
    const compStyle = window.getComputedStyle(parent, null);
    const top       = parseInt(compStyle.paddingTop);
    const bottom    = parseInt(compStyle.paddingBottom);

    _e.style.height = ht - top - bottom + 'px';
  });
}

window.addEventListener('resize', () => resizeHandler());
resizeHandler();