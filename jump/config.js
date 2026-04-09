window.LEVELS_CONFIG = [
  {
    "name": "关卡 1",
    "initialCoins": 0,
    "playerStartX": 264,
    "playerStartY": 580,
    "cards": [
      {
        "label": " +1",
        "x": 264,
        "y": 340
      }
    ],
    "code": "#include <string>\n#include <hetao.h>\nusing namespace std;\nint main(){\n    // a指代前方的路\n    string a;\n    a = \"前方的路\";\n\n    ##点击这里写代码##\n\n    return 0;\n}"
  },
  {
    "name": "关卡 2",
    "initialCoins": 1,
    "cards": [
      {
        "label": " -5",
        "x": 158,
        "y": 110
      },
      {
        "label": " +4",
        "x": 363,
        "y": 110
      },
      {
        "label": " +8",
        "x": 154,
        "y": 276
      },
      {
        "label": " -2",
        "x": 370,
        "y": 266
      },
      {
        "label": " *2",
        "x": 150,
        "y": 438
      },
      {
        "label": " +6",
        "x": 378,
        "y": 438
      },
      {
        "label": " +3",
        "x": 150,
        "y": 612
      },
      {
        "label": " ÷2",
        "x": 382,
        "y": 607
      }
    ],
    "code": "#include <string>\n#include <hetao.h>\nusing namespace std;\nint main(){\n    string a;\n    a = \"left\";\n    ##创建变量b##\n    ##把另一条路存到变量b##\n    //选择跳跃路线\n    jump(a);\n    ##第二步##\n    ##第三步##\n    ##第四步##\n\n  return 0;\n}"
  },
  {
    "name": "关卡 3",
    "initialCoins": null,
    "cards": [
      {
        "label": "÷3",
        "x": 158,
        "y": 99
      },
      {
        "label": "*3",
        "x": 363,
        "y": 99
      },
      {
        "label": "+5",
        "x": 155,
        "y": 246
      },
      {
        "label": "-8",
        "x": 366,
        "y": 246
      },
      {
        "label": "÷2",
        "x": 148,
        "y": 411
      },
      {
        "label": "+10",
        "x": 371,
        "y": 412
      },
      {
        "label": "÷5",
        "x": 143,
        "y": 587
      },
      {
        "label": "*2",
        "x": 376,
        "y": 587
      }
    ],
    "code": "#include <string>\n#include <hetao.h>\nusing namespace std;\nint main(){\n    string a;\n    a = \"风浪越大鱼越贵之单车变摩托之路\";\n    string b;\n    a = \"猥琐发育之我只要稳稳的幸福之路\";\n    ##创建整数变量coin##\n    ##放金币到coin里面##\n    \n    //规划路线\n    jump( ##  ## );\n    jump( ##  ## );\n    jump( ##  ## );\n    jump( ##  ## );\n\n    return 0;\n}"
  },
  {
    "name": "关卡 4",
    "initialCoins": null,
    "cards": [
      { "label": "x10", "x": 260, "y": 110 },
      { "label": "+100", "x": 404, "y": 110 },
      { "label": "+200", "x": 550, "y": 110 },

      { "label": "+20", "x": 260, "y": 256 },
      { "label": "÷0.5", "x": 404, "y": 256 },
      { "label": "+300", "x": 550, "y": 256 },

      { "label": "+50", "x": 260, "y": 392 },
      { "label": "+100", "x": 404, "y": 392 },
      { "label": "+300", "x": 550, "y": 392 },

      { "label": "+20", "x": 260, "y": 550 },
      { "label": "+50", "x": 404, "y": 550 },
      { "label": "+300", "x": 550, "y": 550 }
    ],
    "code": "#include <string>\n#include <hetao.h>\nusing namespace std;\nint main(){\n    string a;\n    a = \"左边没错我是左边的路\";\n    string b;\n    b = \"C位就是C位之中间的路\";\n    string c;\n    c = \"哈哈没错我就是右边的路\"\n    int coin;\n    coin = ##初始金币数量##;\n\n    //找到最优路径\n    jump( ##  ## );\n    jump( ##  ## );\n    jump( ##  ## );\n    jump( ##  ## );\n\n    return 0;\n}"
  }
];