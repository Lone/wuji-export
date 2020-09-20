(function (app) {
    var bdConfig = {
        "font-color": {
            "CAM_X0101": "#FFFFFF 100%",
            "CAM_X0102": "#FFFFFF 83%",
            "CAM_X0103": "#FFFFFF 66%",
            "CAM_X0104": "#FFFFFF 33%",
            "CAM_X0105": "#272829 100%",
            "CAM_X0106": "#3D3F40 100%",
            "CAM_X0107": "#515354 100%",
            "CAM_X0108": "#8E9294 100%",
            "CAM_X0109": "#A2A6A8 100%",
            "CAM_X0110": "#B8BCBF 100%",
            "CAM_X0111": "#CBD1D4 100%",
            "CAM_X0112": "#E1E7EB 100%",
        },
        "border-color": {
            "CAM_X0401": "#EDEFF0 00%",
            "CAM_X0402": "#FFFFFF 100%",
            "CAM_X0403": "#FFFFFF 8%",
            "CAM_X0404": "#FFFFFF 16%",
            "CAM_X0405": "#FFFFFF 25%",
            "CAM_X0406": "#FFFFFF 33%",
            "CAM_X0407": "#FFFFFF 42%",
            "CAM_X0408": "#FFFFFF 50%",
            "CAM_X0409": "#FFFFFF 66%",
            "CAM_X0410": "#FFFFFF 83%",
            "CAM_X0411": "#FFFFFF 92%",
            "CAM_X0412": "#FFFFFF 100%",
            "CAM_X0413": "#000000 8%",
            "CAM_X0414": "#000000 16%",
            "CAM_X0415": "#000000 25%",
            "CAM_X0416": "#000000 33%",
            "CAM_X0417": "#000000 42%",
            "CAM_X0418": "#000000 50%",
            "CAM_X0419": "#000000 66%",
            "CAM_X0420": "#000000 83%",
            "CAM_X0421": "#000000 92%",
            "CAM_X0422": "#000000 100%"
        },
        "fill-color": {
            "CAM_X0301": "#FF392B 100%",
            "CAM_X0302": "#00A2FF 100%",
            "CAM_X0303": "#00A2FF 100%",
            "CAM_X0304": "#00A2FF 100%",
            "CAM_X0305": "#FFA32B 100%",
            "CAM_X0306": "#2B87FF 100%",
            "CAM_X0307": "#A32BFF 100%",
            "CAM_X0308": "#FF2B87 100%",
            "CAM_X0309": "#24D45C 100%",
            "CAM_X0310": "#FF4063 100%",
            "CAM_X0311": "#6B4A1B 100%",
            "CAM_X0312": "#FFD82B 100%",
            "CAM_X0313": "#FFFBEB 100%",
            "CAM_X0314": "#FFCC40 100%",
            "CAM_X0315": "#BFBFBF 100%",
            "CAM_X0316": "#D4A77B 100%",
            "CAM_X0317": "#BF0053 100%"
        },
        "shadow-color": {
            "CAM_X0801": "#000000 8%",
            "CAM_X0802": "#000000 12%",
            "CAM_X0803": "#000000 16%",
            "CAM_X0804": "#000000 25%",
            "CAM_X0805": "#000000 33%",
            "CAM_X0806": "#000000 42%",
            "CAM_X0807": "#000000 50%"
        },
        "font-size": {
            "T_X01": [34, 88],
            "T_X02": [28, 73],
            "T_X03": [22, 57],
            "T_X04": [20, 52],
            "T_X05": [17, 44],
            "T_X06": [16, 42],
            "T_X07": [15, 39],
            "T_X08": [13, 34],
            "T_X09": [12, 31],
            "T_X10": [10, 26]
        },
        "font-family": {
            "F_X01": "PingFangSC-Regular",
            "F_X02": "PingFangSC-Medium"
        },
        "radius": {
            "J_X02": [0, 0],
            "J_X03": [2, 5],
            "J_X04": [4, 10],
            "J_X05": [8, 21],
            "J_X06": [12, 31],
            "J_X07": [20, 52]
        },
        "margin-verticle": {
            "M_H_X001": [4, 10],
            "M_H_X002": [6, 16],
            "M_H_X003": [8, 21],
            "M_H_X004": [12, 31],
            "M_H_X005": [16, 42],
            "M_H_X006": [18, 47],
            "M_H_X007": [20, 52],
            "M_H_X008": [24, 62],
            "M_H_X009": [28, 73],
            "M_H_X010": [32, 83],
            "M_H_X011": [36, 94],
            "M_H_X012": [40, 104],
            "M_H_X013": [44, 114],
            "M_H_X014": [48, 125],
            "M_H_X015": [52, 135],
            "M_H_X016": [56, 146],
            "M_H_X017": [60, 156]
        },
        "margin-horizontal": {
            "M_W_X001": [2, 5],
            "M_W_X002": [4, 10],
            "M_W_X003": [6, 16],
            "M_W_X004": [8, 21],
            "M_W_X005": [11, 29],
            "M_W_X006": [12, 31],
            "M_W_X007": [13, 34],
            "M_W_X008": [16, 42],
            "M_W_X009": [17, 44],
            "M_W_X010": [18, 47],
            "M_W_X011": [19, 49],
            "M_W_X012": [20, 52],
            "M_W_X013": [24, 62],
            "M_W_X014": [28, 73],
            "M_W_X015": [32, 83],
            "M_W_X016": [36, 94],
            "M_W_X017": [40, 104],
            "M_W_X018": [44, 114],
            "M_W_X019": [48, 125],
            "M_W_X020": [52, 135],
            "M_W_X021": [56, 146],
            "M_W_X022": [60, 156]
        }
    };

    var fontPadding = {
        'pt': {
            '24': {
                top: 2,
                bottom: 3
            },
            '27': {
                top: 3,
                bottom: 3
            },
            '30': {
                top: 3,
                bottom: 3
            },
            '33': {
                top: 3,
                bottom: 4
            },
            '36': {
                top: 3,
                bottom: 4
            },
            '39': {
                top: 3,
                bottom: 5
            },
            '42': {
                top: 4,
                bottom: 5
            },
            '45': {
                top: 4,
                bottom: 5
            },
            '48': {
                top: 5,
                bottom: 5
            },
            '51': {
                top: 5,
                bottom: 5
            },
            '54': {
                top: 5,
                bottom: 6
            },
            '57': {
                top: 5,
                bottom: 7
            },
            '60': {
                top: 5,
                bottom: 7
            },
            '63': {
                top: 6,
                bottom: 7
            },
            '66': {
                top: 6,
                bottom: 7
            },
            '69': {
                top: 7,
                bottom: 7
            },
            '72': {
                top: 7,
                bottom: 7
            },
            '75': {
                top: 6,
                bottom: 9
            },
            '78': {
                top: 7,
                bottom: 9
            },
            '81': {
                top: 7,
                bottom: 9
            },
            '84': {
                top: 8,
                bottom: 9
            },
            '87': {
                top: 8,
                bottom: 9
            },
            '90': {
                top: 7,
                bottom: 11
            },
            '93': {
                top: 8,
                bottom: 10
            },
            '96': {
                top: 9,
                bottom: 10
            },
            '99': {
                top: 10,
                bottom: 10
            },
            '102': {
                top: 11,
                bottom: 9
            },
            '105': {
                top: 12,
                bottom: 9
            }
        },
        'dp/sp': {
            '90': {
                top: 8,
                bottom: 8
            },
            '78': {
                top: 7,
                bottom: 7
            },
            '63': {
                top: 5,
                bottom: 5
            },
            '60': {
                top: 5,
                bottom: 6
            },
            '54': {
                top: 5,
                bottom: 4
            },
            '51': {
                top: 4,
                bottom: 5
            },
            '48': {
                top: 5,
                bottom: 5
            },
            '45': {
                top: 5,
                bottom: 4
            },
            '42': {
                top: 4,
                bottom: 3
            },
            '39': {
                top: 3,
                bottom: 4
            },
            '36': {
                top: 2,
                bottom: 3
            },
            '33': {
                top: 3,
                bottom: 2
            },
            '30': {
                top: 4,
                bottom: 3
            },
            '27': {
                top: 3,
                bottom: 2
            }
        }
    };

    app.fixPadding = function (pos) {
        var paddingConf = {};
        // 如果是原图尺寸是1x
        if (this.project.sizeMode === '1') {
            var pt_1x = {},
                dp_1x = {};
            for (const k in fontPadding['pt']) {
                if (fontPadding['pt'].hasOwnProperty(k)) {
                    const element = fontPadding['pt'][k];
                    element.top = element.top / 3.0;
                    element.bottom = element.bottom / 3.0;
                    pt_1x[k / 3.0] = element;
                }
            }
            for (const k in fontPadding['dp/sp']) {
                if (fontPadding['dp/sp'].hasOwnProperty(k)) {
                    const element = fontPadding['dp/sp'][k];
                    element.top = element.top / 3.0;
                    element.bottom = element.bottom / 3.0;
                    dp_1x[k / 3.0] = element;
                }
            }
            paddingConf['pt'] = pt_1x;
            paddingConf['dp/sp'] = dp_1x;
        } else {
            paddingConf['pt'] = fontPadding['pt'];
            paddingConf['dp/sp'] = fontPadding['dp/sp'];
        }
        var paddingValue = 0;
        var unit = this.configs.unit === 'dp/sp' ? 'dp/sp' : 'pt';
        if (this.selectedIndex) {
            var fromLayer = this.current.layers[this.selectedIndex];
            if (fromLayer && fromLayer.type === 'text') {
                var padding = paddingConf[unit][fromLayer.fontSize];
                if (padding) {
                    paddingValue += pos === 'top' ? padding.top : padding.bottom;
                }
            }
        }
        if (this.targetIndex) {
            var toLayer = this.current.layers[this.targetIndex];
            if (toLayer && toLayer.type === 'text') {
                var padding = paddingConf[unit][toLayer.fontSize];
                if (padding) {
                    paddingValue += pos === 'top' ? padding.bottom : padding.top;
                }
            }
        }
        return paddingValue;
    };

    app.bdCode = function (confName, value, valueOnly) {
        var returnValue = '';
        if (bdConfig.hasOwnProperty(confName)) {
            var conf = bdConfig[confName];
            for (const key in conf) {
                if (conf.hasOwnProperty(key)) {
                    const element = conf[key];
                    if ($.isArray(element)) {
                        var vIndex = this.configs.unit === 'dp/sp' ? 1 : 0;
                        var vNew = element[vIndex];
                        if (this.project.sizeMode === '3') {
                            vNew *= 3;
                        }
                        conf[key] = vNew;
                        value = parseInt(value);
                    }
                    if (value === conf[key]) {

                        if (valueOnly) {
                            returnValue = key;
                        } else {
                            var eleId = confName + '-code';
                            var eleVal = key;
                            returnValue += '<input id="' + eleId + '" type="text" value="' + eleVal + '" readonly="readonly">';
                        }
                    }
                }
            }
        }
        return returnValue;
    };
})(SMApp.fn);