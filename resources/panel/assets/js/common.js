var I18N = {};
var lang = 'zh-cn'; //navigator.language.toLocaleLowerCase();
var _ = function (str) {
    return (I18N[lang] && I18N[lang][str]) ? I18N[lang][str] : str;
}

let watermark = {
    text: 'text',
    isAllowDele: false,
    maskDiv: '',
    init: (text) => {
        let canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        canvas.width = '150'; // 单个水印的宽高
        canvas.height = '150';
        watermark.maskDiv = document.createElement('div');
        let ctx = canvas.getContext('2d');
        ctx.font = 'normal 12px Microsoft Yahei'; // 设置样式
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'; // 水印字体颜色
        ctx.rotate(-45 * Math.PI / 180); // 水印偏转角度
        ctx.fillText(watermark.text, 30, 20);
        let src = canvas.toDataURL('image/png');
        watermark.maskDiv.style.position = 'fixed';
        watermark.maskDiv.style.zIndex = '9999';
        watermark.maskDiv.id = '_waterMark';
        watermark.maskDiv.style.top = '0px';
        watermark.maskDiv.style.left = '0';
        watermark.maskDiv.style.height = '100%';
        watermark.maskDiv.style.width = '100%';
        watermark.maskDiv.style.pointerEvents = 'none';
        watermark.maskDiv.style.backgroundImage = 'URL(' + src + ')';
        // 水印节点插到body下
        document.body.appendChild(watermark.maskDiv);
    },
    // 防删机制
    monitor: () => {
        let body = document.getElementsByTagName('body')[0];
        let options = {
            childList: true,
            attributes: true,
            characterData: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
        }
        let observer = new MutationObserver(watermark.callback);
        observer.observe(body, options); // 监听body节点
    },
    // DOM改变执行callback
    callback: (mutations, observer) => {
        // 当attribute属性被修改
        if (mutations[0].target.id === '_waterMark') {
            watermark.removeMaskDiv();
        }
        // 当id被改变时
        if (mutations[0].attributeName === 'id') {
            watermark.removeMaskDiv();
            watermark.init();
        }
        // 当节点被删除
        if (mutations[0].removedNodes[0] && mutations[0].removedNodes[0].id === '_waterMark') {
            watermark.init();
        }
    },
    /* public */
    // 手动销毁水印DOM
    removeMaskDiv: () => {
        document.body.removeChild(watermark.maskDiv);
    },
    render: () => {
        // let maskBox = document.querySelector('#_waterMark');
        if (!watermark.maskDiv) {
            watermark.init();
            // 是否允许通过js或开发者工具等途径修改水印DOM节点（水印的id，attribute属性，节点的删除）,true为允许, 默认不允许
            if (!watermark.isAllowDele) {
                // 设置水印节点修改的DOM事件
                watermark.monitor();
            }
        }
    }
  };

function onInitOK() {
    $(document)
        .on('contextmenu', function (event) {
            return false;
        })
        .keypress(function (event) {
            var eventObj = event || e,
                keyCode = eventObj.keyCode || eventObj.which;

            if (keyCode == 13) {
                event.stopPropagation();
                $('#submit:not(:disabled)').click();
                return false;
            }
        });
    watermark.text = '百度内部工具，仅限于公司内部使用';
    watermark.render();
}

function lookupItemInput(x, y) {
    var elem = document.elementFromPoint(x, y);
    $(elem).click();
}

function showError(error) {
    if (error instanceof Error) {
        $('html').html(`
        <body style="-webkit-user-select:auto; padding:10px; background:#333; color:white; word-wrap:break-word; word-break:break-all;">
            <p>
            ${error.name}: ${error.message}
            </p>
            <p></p>
            <p>
            ${parseStack(error.stack)}
            </p>
        </body>
        `);
    } else {
        $('html').html(`
        <body style="-webkit-user-select:auto; padding:10px; background:#333; color:white; word-wrap:break-word; word-break:break-all;">
            <p>
            ${JSON.stringify(error)}
            </p>
        </body>
        `);
    }

    function parseStack(stack) {
        return stack.split('\n')
            .map(line => parseStackLine(line))
            .map(line => `${line}<br/>`)
            .join('\n');
    }

    function parseStackLine(line) {
        let hasFnName = line.indexOf('@') >= 0;
        return line.replace(/@?file:\/\/.+\//, hasFnName ? '@' : '');
    }
}