const app = $('#app');
const components = {
  '#navigation': '../components/navigation.html',
  '#header': '../components/header.html',
  '#footer': '../components/footer.html',
};
$.each(components, (node, url) => {
  $(node).load(url);
});
