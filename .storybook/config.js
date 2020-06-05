import { configure } from '@storybook/react';
function loadStories() {
  require('../src/stories/asgnStories.js');
}
configure(loadStories, module);