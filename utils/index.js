function parseRdf(data) {
  const rdf = data['rdf:RDF'];
  const ebook = rdf['pgterms:ebook'][0];

  const title = ebook['dcterms:title'][0];
  const license_rights = ebook['dcterms:rights'][0];
  const language = ebook['dcterms:language'][0]['rdf:Description'][0]['rdf:value'][0]['_'];
  const publisher = 'Gutenberg';

  return { title, license_rights, language, publisher };
}

module.exports = {
  parseRdf,
};
