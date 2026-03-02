import '@knight-lab/timelinejs/dist/css/timeline.css';
import { Timeline } from '@knight-lab/timelinejs';
// The TL.Timeline constructor takes at least two arguments:
// the id of the Timeline container (no '#'), and
// the URL to your JSON data file or Google spreadsheet.
// the id must refer to an element "above" this code,
// and the element must have CSS styling to give it width and height
// optionally, a third argument with configuration options can be passed.
// See below for more about options.
const options = {
    hash_bookmarks: true,
}
const elementId = 'timeline-embed';
const spreadSheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpdiqZP7osF4OPN9rphApTSRIWah5siMdCPZ4zi9R201G6EwXScw4qKMXVdUWZKOSAoVU-6ttrdUzW/pubhtml';
const timeline = new Timeline(elementId, spreadSheetUrl, options);
timeline.on('loaded', (data)=>{
    console.log('%c  data:', 'color: #0e93e0;background: #aaefe5;', data);
})
timeline.on('change',(data)=>{
    console.log('%c  data:', 'color: #0e93e0;background: #aaefe5;', data);
})
