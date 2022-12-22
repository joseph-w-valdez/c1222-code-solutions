var $tabContainer = document.querySelector('.tab-container');
var $tabNodes = document.querySelectorAll('.tab');
var $viewNodes = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClickedTab);

function handleClickedTab(event) {
  event.preventDefault();
  if (event.target.matches('.tab') === false) {
    return undefined;
  } else {
    for (let tabNode = 0; tabNode < $tabNodes.length; tabNode++) {
      if (event.target === $tabNodes[tabNode]) {
        $tabNodes[tabNode].classList.add('active');
      } else {
        $tabNodes[tabNode].classList.remove('active');
      }
    }
    var $dataViewAttribute = event.target.getAttribute('data-view');
    for (let viewNode = 0; viewNode < $viewNodes.length; viewNode++) {
      if ($dataViewAttribute === $viewNodes[viewNode].getAttribute('data-view')) {
        $viewNodes[viewNode].classList.remove('hidden');
      } else {
        $viewNodes[viewNode].classList.add('hidden');
      }
    }
  }
}
