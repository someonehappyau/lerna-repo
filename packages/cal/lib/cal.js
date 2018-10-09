'use strict';

module.exports = cal;

function cal() {
    console.log('calling in cal main function.');

    return {
        showit: function(){
            console.log('calling in shoit.');
        }
    }
}
