export default function initParameters() {
  const parameters = new URLSearchParams(location.search);
  function activeParameters(parameter) {
    const element = document.getElementById(parameter);
    if(element) {
      element.checked = true;
    }
  }
  parameters.forEach(activeParameters);
}