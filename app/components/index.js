import React from 'react';
import ReactDOM from 'react-dom';
import Extension from 'components/extension';
import 'helpers/popup';

window.entryFunction = function (data='', type){
	let popup = (type === 'popup');
	let carousel = (type === 'carousel');
	let ribbon = (type === 'ribbon');
	console.log("data: ", data);
	ReactDOM.render(<Extension data={data} popup={popup} carousel={carousel} ribbon={ribbon} />, document.getElementById('app'));
}

