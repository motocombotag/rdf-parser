const Meta = require('../models/meta');

async function saveMeta(meta) {
  try {
    await Meta.create(meta, {
      fields: ['title', 'license_rights', 'language', 'publisher']
    });
    console.log('Saved meta!', meta);
} catch (error) {
  console.error('Error while saving meta!', error);
  }
}

module.exports = {
  saveMeta,
};
