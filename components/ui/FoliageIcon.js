import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const Icon = ({ iconIndex }) => {
  // Define the coordinates and dimensions for each icon
  const icons = [
    { x: 0, y: 0, width: 50, height: 50 },
    { x: 50, y: 0, width: 50, height: 50 },
    // Add more icons here
  ];

  const { x, y, width, height } = icons[iconIndex];

  return (
    <Svg width={width} height={height} viewBox={`${x} ${y} ${width} ${height}`}>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.014373779296875 -0.0321807861328125 0.0463409423828125 -0.02069091796875 475.3 300.8)"
          id="gradient0"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0146026611328125 -0.00390625 0.010223388671875 0.038116455078125 540.65 313.9)"
          id="gradient1"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0121002197265625 -0.004180908203125 0.0156707763671875 0.045318603515625 507.5 260.8)"
          id="gradient2"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.010284423828125 -0.004058837890625 0.0144500732421875 0.0366058349609375 518.6 293.35)"
          id="gradient3"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.008514404296875 -0.008514404296875 0.0197296142578125 -0.0197296142578125 453.9 323.4)"
          id="gradient4"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0232391357421875 -0.028076171875 0.0337982177734375 0.0279693603515625 658.2 292.45)"
          id="gradient5"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0105438232421875 -0.039306640625 0.04815673828125 0.012908935546875 630.4 272.9)"
          id="gradient6"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.011688232421875 -0.020233154296875 0.028106689453125 -0.0162200927734375 585.05 296.2)"
          id="gradient7"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.009674072265625 -0.0361328125 0.0408782958984375 -0.010955810546875 603.75 280.95)"
          id="gradient8"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0135498046875 0.050567626953125 -0.054290771484375 0.014556884765625 717.9 295.55)"
          id="gradient9"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0076904296875 0.0286865234375 -0.030548095703125 -0.0081787109375 789.4 315.7)"
          id="gradient10"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0654449462890625 -0.072784423828125 0 884.2 283.9)"
          id="gradient11"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0159149169921875 0.0159149169921875 -0.0179901123046875 -0.0179901123046875 914.65 322.65)"
          id="gradient12"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.04034423828125 -0.0463714599609375 0 1044.4 303.25)"
          id="gradient13"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.047882080078125 -0.047882080078125 0 969.8 302)"
          id="gradient14"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.06756591796875 -0.0700225830078125 0 1014.25 283.85)"
          id="gradient15"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0230255126953125 -0.0178375244140625 0 1062.1 326.6)"
          id="gradient16"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0376739501953125 -0.045928955078125 0 1125.05 302.5)"
          id="gradient17"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.060089111328125 -0.0634613037109375 0 1155.05 288.15)"
          id="gradient18"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.05218505859375 -0.0518798828125 0 1191.8 297.6)"
          id="gradient19"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.05145263671875 -0.0575103759765625 0 1084.55 296.7)"
          id="gradient20"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0543060302734375 -0.06195068359375 0 1292.55 294)"
          id="gradient21"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.036163330078125 -0.041656494140625 0 1240.75 310.6)"
          id="gradient22"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.01251220703125 0.0467376708984375 -0.059844970703125 -0.0160369873046875 1411.95 308.15)"
          id="gradient23"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.015594482421875 0.027008056640625 -0.0360870361328125 0.0208282470703125 1371.45 310.6)"
          id="gradient24"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0653076171875 -0.0683746337890625 0 1534.6 289.8)"
          id="gradient25"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.01202392578125 0.044921875 -0.044281005859375 -0.0118560791015625 1557.3 308.25)"
          id="gradient26"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0732421875 -0.0753936767578125 0 1504.65 284.05)"
          id="gradient27"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.01202392578125 0.044891357421875 -0.0472259521484375 0.012664794921875 1482.25 305.75)"
          id="gradient28"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.00537109375 0.0092926025390625 -0.00982666015625 0.00567626953125 1468.1 336.5)"
          id="gradient29"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.006439208984375 0.0111541748046875 -0.0161590576171875 -0.0093231201171875 1575.15 330.55)"
          id="gradient30"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.059539794921875 0.063751220703125 0 1640.25 282.9)"
          id="gradient31"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.0503082275390625 0.0487823486328125 0 1660.6 304.45)"
          id="gradient32"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0197296142578125 -0.034149169921875 0.036468505859375 0.02105712890625 1674.95 309.9)"
          id="gradient33"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0091552734375 -0.034149169921875 0.0391845703125 -0.010498046875 1612.55 311.2)"
          id="gradient34"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0022125244140625 -0.00384521484375 0.0051116943359375 -0.0029449462890625 1598.35 339.6)"
          id="gradient35"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0144805908203125 -0.0250701904296875 0.0230255126953125 0.0132904052734375 1689.7 322.65)"
          id="gradient36"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0030517578125 -0.01141357421875 0.0155487060546875 0.0041656494140625 1698.3 331.2)"
          id="gradient37"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0301055908203125 -0.04705810546875 0 1811.65 322)"
          id="gradient38"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0174407958984375 0.0302276611328125 -0.03851318359375 -0.0222320556640625 1747.7 310.1)"
          id="gradient39"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0439910888671875 -0.03607177734375 0 1892.9 304.9)"
          id="gradient40"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0 0 0 1840.9 214.9)"
          id="gradient41"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0236968994140625 0.0174560546875 -0.0347137451171875 0.047149658203125 2009.45 290.05)"
          id="gradient42"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.01654052734375 0.0286407470703125 -0.0398101806640625 -0.022979736328125 2019.2 300.45)"
          id="gradient43"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0129852294921875 0.048492431640625 -0.056610107421875 -0.015167236328125 2031.25 290.1)"
          id="gradient44"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0149078369140625 0.0556793212890625 -0.0636138916015625 0.0170440673828125 2045.55 284.15)"
          id="gradient45"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0046539306640625 0.048248291015625 -0.0565338134765625 0.0054473876953125 2061.3 291.55)"
          id="gradient46"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.041778564453125 -0.0433197021484375 0 2068.55 302.6)"
          id="gradient47"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0089569091796875 0.033477783203125 -0.0295867919921875 0.0079193115234375 1995.05 313.45)"
          id="gradient48"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.02197265625 -0.02197265625 0 1984.6 320.1)"
          id="gradient49"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0020599365234375 0.0076904296875 -0.0081787109375 0.002197265625 1978 331.15)"
          id="gradient50"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0269012451171875 -0.030517578125 0 2081.4 313.1)"
          id="gradient51"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.00439453125 0.0163726806640625 -0.014312744140625 -0.0038299560546875 2091.35 325.95)"
          id="gradient52"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0660552978515625 -0.074310302734375 0 2159.5 283.9)"
          id="gradient53"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0431060791015625 -0.048919677734375 0 2135.75 304.7)"
          id="gradient54"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.02545166015625 -0.0303497314453125 0 2125.25 319.9)"
          id="gradient55"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0152435302734375 -0.01617431640625 0 2110.5 331.5)"
          id="gradient56"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0120086669921875 -0.0163116455078125 0 2207.75 331.4)"
          id="gradient57"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0296630859375 -0.0308837890625 0 2185.3 319.45)"
          id="gradient58"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.057373046875 -0.0720367431640625 0 241.7 412.35)"
          id="gradient59"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.060089111328125 -0.070068359375 0 391 425.5)"
          id="gradient60"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0051727294921875 0.0193328857421875 -0.028778076171875 -0.0077056884765625 393.5 454.25)"
          id="gradient61"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.003814697265625 0.0066070556640625 -0.00750732421875 -0.00433349609375 399.1 462.7)"
          id="gradient62"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.006500244140625 0.046142578125 -0.057830810546875 0.0081329345703125 357.2 432.15)"
          id="gradient63"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.011688232421875 0.043609619140625 -0.0420684814453125 0.0112762451171875 344.05 434.1)"
          id="gradient64"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0042572021484375 0.015869140625 -0.0168914794921875 0.0045318603515625 340.35 455.45)"
          id="gradient65"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.044891357421875 -0.066253662109375 0 485.5 433.85)"
          id="gradient66"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.054046630859375 -0.060455322265625 0 605.6 420.95)"
          id="gradient67"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0050048828125 0.0186767578125 -0.0269317626953125 0.0072174072265625 592.75 456.8)"
          id="gradient68"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.06317138671875 -0.0702056884765625 0 637.15 429.95)"
          id="gradient69"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0068359375 0.0255279541015625 -0.0369110107421875 0.0098876953125 658 452.85)"
          id="gradient70"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.006072998046875 -0.003509521484375 -0.00701904296875 -0.01214599609375 781 409.65)"
          id="gradient71"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0072784423828125 -0.012603759765625 -0.0153350830078125 -0.00885009765625 774.25 386.35)"
          id="gradient72"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.006072998046875 -0.003509521484375 0.00701904296875 -0.01214599609375 726 409.65)"
          id="gradient73"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0072784423828125 -0.012603759765625 0.0153350830078125 -0.00885009765625 732.75 386.35)"
          id="gradient74"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.01190185546875 -0.01190185546875 0.010894775390625 -0.010894775390625 720.9 433.75)"
          id="gradient75"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0045013427734375 -0.0077972412109375 0.0066070556640625 -0.003814697265625 721.4 452.6)"
          id="gradient76"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.018096923828125 -0.0104522705078125 0.0031280517578125 -0.0054168701171875 736.4 464)"
          id="gradient77"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0119171142578125 -0.01190185546875 -0.010894775390625 -0.010894775390625 786.15 433.75)"
          id="gradient78"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0181121826171875 -0.0104522705078125 -0.0031280517578125 -0.0054168701171875 770.65 464)"
          id="gradient79"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0045013427734375 -0.0077972412109375 -0.0066070556640625 -0.003814697265625 785.65 452.6)"
          id="gradient80"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0087738037109375 -0.032745361328125 0.03851318359375 0.01031494140625 911 437.95)"
          id="gradient81"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0054473876953125 -0.04571533203125 0.0498046875 0.0059356689453125 888.55 429.5)"
          id="gradient82"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0067596435546875 -0.0252532958984375 0.0297393798828125 0.007965087890625 895.3 445.4)"
          id="gradient83"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0056610107421875 -0.0211334228515625 0.025238037109375 0.0067596435546875 929.85 449.2)"
          id="gradient84"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.005096435546875 -0.0384063720703125 0.0404815673828125 -0.00537109375 859.15 437.15)"
          id="gradient85"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0031890869140625 -0.0118865966796875 0.0211639404296875 -0.0056610107421875 844.55 452.7)"
          id="gradient86"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.00494384765625 -0.026611328125 0.0365753173828125 0.0067901611328125 1040 442.95)"
          id="gradient87"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.01226806640625 -0.0458221435546875 0.05487060546875 -0.0146942138671875 995.6 426.95)"
          id="gradient88"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0028533935546875 -0.01068115234375 0.0256195068359375 -0.006866455078125 966.8 451.75)"
          id="gradient89"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0061187744140625 -0.0421905517578125 0.0527801513671875 0.007659912109375 1158.6 429.15)"
          id="gradient90"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0043487548828125 -0.026702880859375 0.0384979248046875 -0.00628662109375 1110.9 437.8)"
          id="gradient91"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.007781982421875 0.006439208984375 0 1093.6 467.6)"
          id="gradient92"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.0369110107421875 0.0372467041015625 0 1320.9 440.5)"
          id="gradient93"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0341033935546875 -0.0408172607421875 0 1392.45 416.8)"
          id="gradient94"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.016265869140625 0.028167724609375 -0.030548095703125 0.01763916015625 1371.9 449.1)"
          id="gradient95"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0084228515625 0.03143310546875 -0.03082275390625 -0.0082550048828125 1421.9 444.6)"
          id="gradient96"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.043487548828125 0.059967041015625 0 1545.4 420.1)"
          id="gradient97"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.017852783203125 0.0233612060546875 0 1500.15 450.1)"
          id="gradient98"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.0449981689453125 0.0605926513671875 0 1648.2 424.25)"
          id="gradient99"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.026763916015625 -0.0406494140625 0.065155029296875 0.0428924560546875 1785 412.35)"
          id="gradient100"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0069122314453125 0.0258026123046875 -0.0325775146484375 0.00872802734375 1893 448.95)"
          id="gradient101"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0420989990234375 -0.05889892578125 0 1918.2 428.1)"
          id="gradient102"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0218353271484375 0.0377960205078125 -0.067657470703125 0.0390625 2039.3 412.35)"
          id="gradient103"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0256195068359375 -0.04437255859375 0.067657470703125 0.0390625 2177 412.35)"
          id="gradient104"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.025115966796875 -0.043487548828125 0.067657470703125 0.0390625 250.85 553.05)"
          id="gradient105"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0261077880859375 -0.04522705078125 0.067657470703125 0.0390625 386.9 557.15)"
          id="gradient106"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.005615234375 -0.020965576171875 0.025726318359375 0.00689697265625 530.4 527.55)"
          id="gradient107"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.005340576171875 -0.0199432373046875 0.025726318359375 -0.00689697265625 466.6 527.55)"
          id="gradient108"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0198516845703125 -0.00531005859375 0.0048675537109375 0.0181427001953125 523.15 589.5)"
          id="gradient109"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0086212158203125 -0.014923095703125 0.0237884521484375 0.01373291015625 540.9 553.9)"
          id="gradient110"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.022216796875 -0.0128173828125 0.0093841552734375 -0.016265869140625 473.9 589.5)"
          id="gradient111"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.008941650390625 -0.019134521484375 0.02484130859375 -0.0116119384765625 456.15 553.9)"
          id="gradient112"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0063323974609375 0.010955810546875 0.016082763671875 0.0092926025390625 654.5 514.75)"
          id="gradient113"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.010101318359375 0.01751708984375 0.0174560546875 0.01007080078125 668.55 547.8)"
          id="gradient114"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0063323974609375 0.010955810546875 -0.016082763671875 0.0092926025390625 595.5 514.75)"
          id="gradient115"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0101165771484375 0.01751708984375 -0.0174407958984375 0.01007080078125 581.45 547.8)"
          id="gradient116"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.005645751953125 0.0097808837890625 -0.0082244873046875 0.0047454833984375 590.65 583.25)"
          id="gradient117"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0099945068359375 0.0099945068359375 -0.0034027099609375 -0.0034027099609375 613.45 600.95)"
          id="gradient118"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.005645751953125 0.0097808837890625 0.0082244873046875 0.0047454833984375 659.35 583.25)"
          id="gradient119"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0099945068359375 0.0099945068359375 0.00341796875 -0.0034027099609375 636.6 600.95)"
          id="gradient120"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.010833740234375 -0.018768310546875 0.0187225341796875 -0.01080322265625 711.55 534.4)"
          id="gradient121"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0059051513671875 -0.0149383544921875 0.017333984375 -0.0068511962890625 741.6 515.9)"
          id="gradient122"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0059051513671875 -0.0149383544921875 -0.017333984375 -0.0068511962890625 765.4 515.9)"
          id="gradient123"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.029083251953125 0.004119873046875 -0.00128173828125 -0.009033203125 724.6 571.65)"
          id="gradient124"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0108489990234375 -0.018768310546875 -0.0187225341796875 -0.01080322265625 795.45 534.4)"
          id="gradient125"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.029083251953125 0.004119873046875 0.00128173828125 -0.009033203125 782.45 571.65)"
          id="gradient126"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.01171875 -0.0203094482421875 0.02294921875 -0.01324462890625 846.4 525.3)"
          id="gradient127"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0279541015625 -0.0074920654296875 0.0030364990234375 -0.011322021484375 841.75 553.25)"
          id="gradient128"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0160369873046875 -0.0160369873046875 0.018768310546875 0.018768310546875 917.65 525.25)"
          id="gradient129"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0269012451171875 -0.0106201171875 0.004364013671875 0.0110626220703125 922.3 553.1)"
          id="gradient130"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0189361572265625 0.01092529296875 -0.00506591796875 0.0087738037109375 901.3 579.6)"
          id="gradient131"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0190582275390625 0.0110015869140625 -0.00506591796875 -0.0087738037109375 862.65 579.6)"
          id="gradient132"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0164794921875 0.0164794921875 -0.0155029296875 0.0155181884765625 973.15 540.7)"
          id="gradient133"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.010833740234375 0.018768310546875 -0.0189971923828125 -0.0109710693359375 1047.9 540.75)"
          id="gradient134"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.015655517578125 0.015655517578125 -0.009490966796875 0.0095062255859375 1030.4 579.45)"
          id="gradient135"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0191650390625 0.0110626220703125 -0.0067138671875 -0.011627197265625 990.65 579.45)"
          id="gradient136"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0105133056640625 0.059234619140625 -0.076873779296875 0.013641357421875 1159.4 551.75)"
          id="gradient137"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          r="819.2"
          cx="0"
          cy="0"
          spreadMethod="pad"
          gradientTransform="matrix(0.081207275390625 0 0 0.081207275390625 1265.5 540.9)"
          id="gradient138"
        >
          <stop offset="0.4980392156862745" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </radialGradient>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          r="819.2"
          cx="0"
          cy="0"
          spreadMethod="pad"
          gradientTransform="matrix(0.076263427734375 0 0 0.076263427734375 1394.05 540.9)"
          id="gradient139"
        >
          <stop offset="0.4980392156862745" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0009307861328125 0.003509521484375 -0.0092620849609375 -0.0024871826171875 1504.15 574.75)"
          id="gradient140"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.00299072265625 0.00518798828125 -0.0059051513671875 -0.0034027099609375 1518.8 571.7)"
          id="gradient141"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0013580322265625 0.0097198486328125 -0.0109405517578125 0.0015106201171875 1535.75 489.4)"
          id="gradient142"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.00323486328125 0.0055999755859375 -0.01025390625 0.00592041015625 1545.95 503.55)"
          id="gradient143"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0023956298828125 0.0041351318359375 -0.004638671875 0.002685546875 1531 498.2)"
          id="gradient144"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.003814697265625 0.006591796875 -0.006622314453125 0.0038299560546875 1537.5 521.1)"
          id="gradient145"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0013427734375 0.0050048828125 -0.0079498291015625 -0.0021209716796875 1547.6 516.15)"
          id="gradient146"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0014801025390625 0.0055084228515625 -0.007843017578125 -0.002105712890625 1543.1 542.6)"
          id="gradient147"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.0047607421875 -0.008026123046875 0 1533.4 536.45)"
          id="gradient148"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0048065185546875 0.00592041015625 -0.0091094970703125 -0.0074005126953125 1522.05 554.1)"
          id="gradient149"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0062713623046875 0.005096435546875 -0.0025482177734375 -0.003143310546875 1537.65 552.1)"
          id="gradient150"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.00640869140625 -0.0102996826171875 0 1498.2 588.1)"
          id="gradient151"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0021209716796875 0.0036773681640625 -0.006622314453125 0.0038299560546875 1511.3 590.85)"
          id="gradient152"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0042266845703125 0.0042266845703125 -0.005523681640625 -0.005523681640625 1656.55 525)"
          id="gradient153"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0023345947265625 0.0086669921875 -0.012908935546875 0.0034637451171875 1631.55 519.2)"
          id="gradient154"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.001220703125 0.0045623779296875 -0.0051727294921875 0.0013885498046875 1619.3 521.95)"
          id="gradient155"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0030364990234375 0.0052490234375 -0.004638671875 0.002685546875 1619.65 571.05)"
          id="gradient156"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.004608154296875 -0.00823974609375 0 1638.85 558.05)"
          id="gradient157"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0030364990234375 0.005279541015625 -0.0062408447265625 -0.00360107421875 1657.25 567.05)"
          id="gradient158"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.006866455078125 0.00396728515625 -0.00299072265625 -0.00518798828125 1677.85 577.05)"
          id="gradient159"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 0.00799560546875 -0.008331298828125 0 1657.85 584.8)"
          id="gradient160"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0028076171875 0.0048675537109375 -0.0061798095703125 0.003570556640625 1637.25 591.3)"
          id="gradient161"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          r="819.2"
          cx="0"
          cy="0"
          spreadMethod="pad"
          gradientTransform="matrix(0.0866851806640625 0 0 0.0866851806640625 1777.5 540.9)"
          id="gradient162"
        >
          <stop offset="0.4980392156862745" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0122222900390625 0 0 0.0060272216796875 1814 518.7)"
          id="gradient163"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.015472412109375 0 0 0.0094146728515625 1801.15 527.3)"
          id="gradient164"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.00439453125 -0.00439453125 0.0075531005859375 0.0075531005859375 1781.9 517.8)"
          id="gradient165"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0048980712890625 0 0 0.0117034912109375 1783.2 522.85)"
          id="gradient166"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.004547119140625 -0.0105438232421875 0.0115203857421875 -0.0049591064453125 1765.7 559)"
          id="gradient167"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0084075927734375 0 0 0.0043792724609375 1802.35 563.35)"
          id="gradient168"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.001556396484375 -0.00579833984375 0.00946044921875 0.002532958984375 1742.2 535.8)"
          id="gradient169"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.00372314453125 -0.00372314453125 0.007476806640625 0.007476806640625 1783.5 579.3)"
          id="gradient170"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0064544677734375 -0.0064544677734375 0.0053863525390625 -0.00537109375 1767.65 595.4)"
          id="gradient171"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0044708251953125 0.002593994140625 -0.0036468505859375 -0.0063323974609375 1910.65 503.3)"
          id="gradient172"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0154571533203125 0 0 0.005706787109375 1887.65 507.9)"
          id="gradient173"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0032501220703125 0.0056304931640625 -0.0058441162109375 0.0033721923828125 1901.35 525.15)"
          id="gradient174"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.00244140625 0.00140380859375 -0.001617431640625 -0.0028076171875 1919.2 504.95)"
          id="gradient175"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0013427734375 0.0050048828125 -0.0072174072265625 0.0019378662109375 1923.65 526.8)"
          id="gradient176"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0017242431640625 0.0029754638671875 -0.00433349609375 0.00250244140625 1871.5 542.7)"
          id="gradient177"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.004302978515625 0.0074615478515625 -0.0084075927734375 0.004852294921875 1878.5 543.45)"
          id="gradient178"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.004913330078125 -0.002838134765625 0.0011444091796875 0.0019683837890625 1910.25 531.2)"
          id="gradient179"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.003662109375 0.003662109375 -0.004974365234375 -0.004974365234375 1914.5 553.2)"
          id="gradient180"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0025634765625 0.0095672607421875 -0.0103912353515625 0.0027923583984375 1892.7 559.25)"
          id="gradient181"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0154876708984375 0 0 -0.0052947998046875 1913.35 571.8)"
          id="gradient182"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0052337646484375 0.0066986083984375 -0.0126190185546875 -0.0098876953125 1932.45 529.45)"
          id="gradient183"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.002838134765625 0.004913330078125 -0.0061492919921875 -0.0035400390625 1935 549.5)"
          id="gradient184"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0037384033203125 0.001007080078125 -0.0007476806640625 -0.0028076171875 1925.65 561.1)"
          id="gradient185"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.00201416015625 0.0034942626953125 -0.0046844482421875 -0.0027008056640625 1889.4 579.05)"
          id="gradient186"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0025787353515625 0.004486083984375 -0.0065460205078125 0.0037689208984375 1900.8 590.1)"
          id="gradient187"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          r="819.2"
          cx="0"
          cy="0"
          spreadMethod="pad"
          gradientTransform="matrix(0.0626983642578125 0 0 0.0626983642578125 2034.55 540.9)"
          id="gradient188"
        >
          <stop offset="0.4980392156862745" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </radialGradient>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          r="819.2"
          cx="0"
          cy="0"
          spreadMethod="pad"
          gradientTransform="matrix(0.05670166015625 0 0 0.05670166015625 2161 540.9)"
          id="gradient189"
        >
          <stop offset="0.4980392156862745" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </radialGradient>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          r="819.2"
          cx="0"
          cy="0"
          spreadMethod="pad"
          gradientTransform="matrix(0.0560760498046875 0 0 0.0560760498046875 241.5 669.4)"
          id="gradient190"
        >
          <stop offset="0.4980392156862745" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </radialGradient>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          r="819.2"
          cx="0"
          cy="0"
          spreadMethod="pad"
          gradientTransform="matrix(0.0667724609375 0 0 0.0667724609375 370 669.4)"
          id="gradient191"
        >
          <stop offset="0.4980392156862745" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.003173828125 -0.003173828125 0.0027618408203125 -0.0027618408203125 456.7 647.85)"
          id="gradient192"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0054168701171875 -0.0014495849609375 0.0009002685546875 -0.0033721923828125 461.75 668.3)"
          id="gradient193"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0049896240234375 0 0 0.0030975341796875 464.75 681.75)"
          id="gradient194"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0010528564453125 0.00390625 -0.0043487548828125 0.00115966796875 448.55 677.5)"
          id="gradient195"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0013885498046875 -0.0051727294921875 0.0063629150390625 0.001708984375 453.55 698.5)"
          id="gradient196"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0041961669921875 -0.0024261474609375 0.0018157958984375 -0.003143310546875 466.8 708.9)"
          id="gradient197"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0052947998046875 0 0 -0.00341796875 547.5 671.3)"
          id="gradient198"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0012664794921875 0.0047454833984375 -0.0062255859375 0.001678466796875 516.6 624.75)"
          id="gradient199"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.002777099609375 -0.0048065185546875 0.00469970703125 0.002716064453125 493.3 624.75)"
          id="gradient200"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.002288818359375 -0.0039520263671875 0.0051116943359375 -0.0029449462890625 509.35 641)"
          id="gradient201"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0046234130859375 -0.0046234130859375 0.00341796875 -0.00341796875 499.85 649.1)"
          id="gradient202"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.00103759765625 0.00384521484375 -0.00469970703125 0.0012664794921875 469.8 632.85)"
          id="gradient203"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0062713623046875 -0.001678466796875 0.0010528564453125 -0.003936767578125 474.3 643.8)"
          id="gradient204"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0008697509765625 0.003265380859375 -0.0049591064453125 -0.0013275146484375 486.8 649.1)"
          id="gradient205"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0030670166015625 -0.0053253173828125 0.00518798828125 -0.00299072265625 477.3 657.2)"
          id="gradient206"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0024261474609375 -0.0024261474609375 0.003448486328125 0.003448486328125 474.3 673.6)"
          id="gradient207"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0071258544921875 0.0019073486328125 -0.001220703125 -0.0045318603515625 490.3 661.6)"
          id="gradient208"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0066986083984375 0.001800537109375 -0.0012054443359375 -0.004486083984375 502.85 666.95)"
          id="gradient209"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0026702880859375 0.0046234130859375 -0.0053558349609375 0.0030975341796875 534.95 643.8)"
          id="gradient210"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0037841796875 -0.0037841796875 0.0047760009765625 0.0047760009765625 517.4 656)"
          id="gradient211"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0048065185546875 0.002777099609375 -0.0026702880859375 -0.0046234130859375 529.95 661.3)"
          id="gradient212"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.0034942626953125 0.0054779052734375 0 520.4 669.4)"
          id="gradient213"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0009918212890625 -0.003692626953125 0.005889892578125 -0.0015716552734375 529.9 687)"
          id="gradient214"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0008392333984375 -0.003143310546875 0.0047149658203125 0.0012664794921875 541.55 697.95)"
          id="gradient215"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.003936767578125 0.0022735595703125 -0.002166748046875 -0.0037384033203125 504.9 687.4)"
          id="gradient216"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.003662109375 0.005279541015625 0 517.4 692.65)"
          id="gradient217"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0022430419921875 -0.003875732421875 0.005035400390625 0.002899169921875 520.4 706.6)"
          id="gradient218"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0028228759765625 0.0048980712890625 -0.003936767578125 0.0022735595703125 507.9 700.8)"
          id="gradient219"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.00653076171875 0 0 0.00445556640625 493.3 675)"
          id="gradient220"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0051422119140625 -0.001373291015625 0.0008697509765625 -0.003204345703125 488.3 695.15)"
          id="gradient221"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.00103759765625 -0.003875732421875 0.004669189453125 -0.001251220703125 475.75 689.85)"
          id="gradient222"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.005615234375 0 0 -0.0034942626953125 478.75 703.25)"
          id="gradient223"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0014495849609375 -0.005401611328125 0.0064544677734375 -0.0017242431640625 498.35 713.85)"
          id="gradient224"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0078125 -0.0045013427734375 0.0040740966796875 0.007049560546875 632.05 624)"
          id="gradient225"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.0063323974609375 0.0078125 0 655.75 635.1)"
          id="gradient226"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0034332275390625 0.005950927734375 -0.0065460205078125 0.0037841796875 633.25 646.4)"
          id="gradient227"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.00164794921875 -0.0061187744140625 0.0077972412109375 0.0020904541015625 644.05 665.75)"
          id="gradient228"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0062255859375 -0.0035858154296875 0.00323486328125 0.0055999755859375 666.55 654.55)"
          id="gradient229"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0020599365234375 -0.0076751708984375 0.009552001953125 0.0025634765625 669.85 677.4)"
          id="gradient230"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0071563720703125 -0.0057220458984375 0.005035400390625 -0.0063018798828125 664.9 698.95)"
          id="gradient231"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0082855224609375 -0.0047760009765625 0.0042266845703125 0.0073089599609375 643.95 684.9)"
          id="gradient232"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0089263916015625 0.0023956298828125 -0.001922607421875 -0.007171630859375 625.2 670.85)"
          id="gradient233"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.0019683837890625 0.00732421875 -0.00811767578125 0.0021820068359375 633.25 709.45)"
          id="gradient234"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.00640869140625 -0.003692626953125 0.003143310546875 0.00543212890625 648.6 716.3)"
          id="gradient235"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0083160400390625 0.0048065185546875 -0.004241943359375 -0.007354736328125 581.55 659.55)"
          id="gradient236"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0052337646484375 -0.0052337646484375 0.005584716796875 -0.005584716796875 614.4 629.25)"
          id="gradient237"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.00201416015625 0.0074920654296875 -0.0091705322265625 0.0024566650390625 599.75 638.45)"
          id="gradient238"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0020904541015625 0.0078277587890625 -0.0091552734375 -0.0024566650390625 603.9 664.8)"
          id="gradient239"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0050506591796875 -0.0050506591796875 0.0048065185546875 -0.0048065185546875 605.25 685)"
          id="gradient240"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(-0.0019378662109375 0.0072174072265625 -0.0090789794921875 -0.0024261474609375 618.65 696.85)"
          id="gradient241"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0.009002685546875 0 0 0.00732421875 598.7 711.55)"
          id="gradient242"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="-819.2"
          x2="819.2"
          spreadMethod="pad"
          gradientTransform="matrix(0 -0.0072174072265625 0.0089111328125 0 583.5 691.45)"
          id="gradient243"
        >
          <stop offset="0" stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#A8A8A8" />
        </linearGradient>
      </defs>
      <g>
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M507.8 300.1 Q514.55 270.8 528.2 259.15 L527.65 261.1 Q515.3 289.6 509.5 320.75 L523.65 325.65 Q535.85 292 553.05 281.6 535.9 307.9 528.25 339 L537.85 346.25 458.1 346.25 463.75 335.75 Q457.15 316.5 444 300.55 462.2 312.45 475.9 342.4 L484.75 328.75 Q479.7 284.85 465.8 259.15 476.95 268.25 485.35 284.95 496.5 239 518 221.5 498.45 266.1 497 294.5 L507.8 300.1"
        />
        <path
          stroke="none"
          fill="url(#gradient0)"
          d="M475.9 342.4 Q477.65 296.3 465.8 259.15 479.7 284.85 484.75 328.75 L475.9 342.4"
        />
        <path
          stroke="none"
          fill="url(#gradient1)"
          d="M553.05 281.6 Q539.85 309 537.85 346.25 L528.25 339 Q535.9 307.9 553.05 281.6"
        />
        <path
          stroke="none"
          fill="url(#gradient2)"
          d="M518 221.5 Q506.75 256.75 507.8 300.1 L497 294.5 Q498.45 266.1 518 221.5"
        />
        <path
          stroke="none"
          fill="url(#gradient3)"
          d="M527.65 261.1 Q519.75 289.6 523.65 325.65 L509.5 320.75 Q515.3 289.6 527.65 261.1"
        />
        <path
          stroke="none"
          fill="url(#gradient4)"
          d="M458.1 346.25 Q453.25 321.6 444 300.55 457.15 316.5 463.75 335.75 L458.1 346.25"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M595.75 246.55 Q609.1 250.6 617.4 289.45 626.4 226.7 643.9 222.55 L644.25 222.5 642.7 224.6 Q640.55 227.8 638.85 232.05 626.9 257.6 622 301 L633.25 313.75 Q657.05 256.75 675.5 256.5 649.95 282.1 640.25 317.5 L646.65 328.45 646.3 330.7 647 329 Q661 294.9 674.3 295.4 661.05 305.7 652.7 345.25 L591.05 345.25 Q586.9 324.8 575.9 311.2 582.2 310.95 589.7 322.85 L589.75 322.95 589.75 322.8 596.25 310.25 Q588.2 283.6 573.9 269.6 590.75 271.1 604.6 315.85 L604.7 316.15 604.75 315.6 612.75 305.75 Q607.5 260.5 595.75 246.55"
        />
        <path
          stroke="none"
          fill="url(#gradient5)"
          d="M646.65 328.45 L640.25 317.5 Q649.95 282.1 675.5 256.5 L676.15 256.5 Q655.75 272.35 646.65 328.45"
        />
        <path
          stroke="none"
          fill="url(#gradient6)"
          d="M633.25 313.75 L622 301 Q626.9 257.6 638.85 232.05 629 256.3 633.25 313.75"
        />
        <path
          stroke="none"
          fill="url(#gradient7)"
          d="M573.9 269.6 Q588.2 283.6 596.25 310.25 L589.75 322.8 Q586.1 281.85 573.85 269.6 L573.9 269.6"
        />
        <path
          stroke="none"
          fill="url(#gradient8)"
          d="M595.75 246.55 Q607.5 260.5 612.75 305.75 L604.75 315.6 Q611.05 266.8 594.75 246.3 L595.75 246.55"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M738.8 341.6 Q737.45 297.35 728.25 273.35 737.05 282.35 742.85 295.15 751.65 227.25 774.05 226.1 754.5 232.35 753.15 322.7 758.9 290.85 776.05 273.35 764.05 304.6 763.55 341.6 L753.5 341.6 740.75 341.6 738.8 341.6 M693.3 318.35 Q703.25 327.9 709.45 341.6 L700.2 341.6 Q697.9 329.8 693.3 318.35 M804.8 324.6 Q801.4 333 799.3 341.6 L791.8 341.6 Q797.25 331.9 804.8 324.6"
        />
        <path
          stroke="none"
          fill="url(#gradient9)"
          d="M698.85 249.5 Q725.05 249.6 737 341.6 L714.4 341.6 Q711.75 315.7 703 292.85 716.8 306.95 723.25 330.35 717 254.35 698.85 249.5"
        />
        <path
          stroke="none"
          fill="url(#gradient10)"
          d="M765.05 341.6 Q771.65 318.95 786.05 305.1 780.7 318.4 778.45 332.25 792.35 302.4 813.7 289.8 797.05 312.65 787.3 341.6 L765.05 341.6"
        />
        <path
          stroke="none"
          fill="url(#gradient11)"
          d="M870.2 314.3 L871 306.3 871 306.25 872.4 296.7 875.3 281.25 875.35 281.2 877.3 272.85 877.35 272.8 881.55 258.25 882.8 254.65 884 251.2 885.25 247.95 886.5 244.9 887.7 242 890.05 236.85 892.2 232.55 892.45 232.05 892.55 231.85 896.65 224.65 896.95 224.35 897 224.35 897.35 224.25 Q898 224.25 898.05 224.65 898.35 224.95 898.05 225.35 L896.15 233.3 896.15 233.35 892.45 251.1 889.4 269.2 889.35 269.7 885.75 298.5 885.75 298.45 884.85 307.65 877.7 343.5 871.6 343.5 870.2 314.3"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M884.85 307.65 L885.05 306.6 885.05 306.55 887.55 297.55 887.6 297.5 890.25 289.75 891.4 286.75 892.9 283.2 892.9 283.15 898.85 271.05 898.9 271 900.15 268.8 900.2 268.75 906.1 259.65 906.1 259.6 909 255.8 909.05 255.75 909.15 255.65 909.2 255.6 912.25 252 912.45 251.85 912.5 251.85 912.85 251.75 Q913.5 251.75 913.55 252.15 913.85 252.45 913.5 252.9 L912.25 257.2 912.2 257.35 909.7 265.65 908.45 269.8 900.45 300.95 900.15 302.5 900.15 302.45 896.45 322.25 893.5 343.5 877.7 343.5 884.85 307.65 M871.6 343.5 L858.45 343.5 858.1 339.7 857.2 328.05 857.2 328.1 856.2 317.6 856.2 317.55 856.05 316.25 854.8 306.65 Q853.95 300.75 852.95 296.3 L851.75 291.55 851.7 291.5 850.9 288.95 849.5 285.15 848.65 283.2 848.65 283.25 847.6 281.15 847.6 281.1 847.5 280.95 846.75 279.75 845.75 278.25 845.25 277.6 845.2 277.55 845.05 277.35 845 277.3 844.7 276.9 843.55 275.65 843.4 275.5 843.3 275.45 842.4 274.55 841.25 273.65 839.9 272.7 837.35 271.3 837.2 271.25 832.95 269.75 832.65 269.55 832.45 269 Q832.45 268.3 833.1 268.25 L835.25 267.8 835.35 267.8 838.05 267.6 838.1 267.6 838.8 267.6 842 267.95 842 268 843.75 268.4 843.8 268.4 845.65 269 845.7 269.05 847.6 269.85 847.6 269.9 849.6 271 851.55 272.35 853.5 273.95 855.35 275.75 855.45 275.85 855.6 276.05 857.8 278.65 857.85 278.7 859.9 281.6 859.9 281.7 862.65 286.55 862.65 286.65 865.2 292.6 865.25 292.65 Q867.2 298 868.5 304.15 L870.05 313.45 870.1 313.45 870.2 314.3 871.6 343.5 M838.3 312.75 L839.25 312.9 839.3 312.9 840.05 313.1 840.15 313.15 840.25 313.15 Q841.25 313.45 842.2 314 L842.25 314 843.2 314.6 843.3 314.65 844.05 315.2 845.75 316.7 845.8 316.75 846.7 317.75 846.75 317.8 848.7 320.4 848.75 320.45 849.75 322.05 849.75 322.1 851.65 325.8 851.65 325.85 852.7 328.4 853.85 331.65 853.85 331.7 855.3 336.9 855.3 336.95 856.5 343.35 856.5 343.5 843.1 343.5 842.75 336.9 842.75 336.95 842.15 331.75 841.85 329.7 841.5 327.8 840.65 324.2 839.8 321.8 839.75 321.65 839.6 321.25 839 320.1 838.7 319.65 838.65 319.6 838.6 319.55 838.6 319.5 838.65 319.6 838.65 319.5 838.6 319.5 838.55 319.45 838.6 319.5 838.55 319.45 838.5 319.4 838.45 319.25 838.3 319.1 838.25 319.05 837.55 318.3 837.45 318.2 836.75 317.7 835.9 317.3 835.95 317.3 835.85 317.25 835.8 317.25 835.55 317.15 835.45 317.1 835.3 317.05 834.8 316.95 834.65 316.95 834.5 316.9 834.35 316.9 834.3 316.85 833.7 316.8 833.5 316.8 833.3 316.8 831.85 316.85 831.9 316.85 830.6 317 830.5 317 830.45 317 830 316.9 829.75 316.5 829.75 316.05 829.75 316 829.95 315.7 830.3 315.35 830.5 315.25 831.05 314.8 Q831.85 314.25 832.55 313.85 L832.6 313.85 833.3 313.5 833.35 313.45 834.45 313.05 834.55 313.05 836.2 312.7 836.35 312.7 836.45 312.7 836.5 312.7 838.3 312.75 M927.65 325.95 L927.75 325.95 927.85 325.95 928.85 326.15 929.05 326.15 930.4 326.6 930.5 326.6 931.35 327.05 931.55 327.1 932.95 328 933 328 933.5 328.4 933.5 328.45 934.1 328.9 934.25 329.15 934.3 329.75 933.95 330.2 933.9 330.2 933.5 330.25 932.6 330.15 932.55 330.15 932.5 330.15 932.2 330.1 930.8 330.05 930.55 330.05 930.5 330.05 930.45 330.05 930.35 330.05 930.1 330.1 929.9 330.1 929.85 330.1 929.7 330.15 929.25 330.2 929.15 330.25 928.95 330.25 928.95 330.3 928.45 330.4 928.35 330.45 928.15 330.55 927.3 330.95 927.35 330.95 926.85 331.25 926.65 331.4 926.55 331.55 926.05 332 926 332.05 926 332.1 925.45 332.75 925.35 332.9 925.25 333.1 925.2 333.15 924.8 333.9 924.75 334 924.65 334.1 924.65 334.15 924.35 334.8 924.3 334.95 924.25 335 924.25 335.05 924 335.7 923.95 335.75 923.95 335.8 923.9 335.9 923.4 337.4 923.4 337.45 922.9 339.35 922.9 339.4 922.85 339.5 922.15 343.5 910.75 343.5 910.8 343.25 912.8 338.25 912.85 338.15 915.4 333.6 915.4 333.55 916.8 331.65 916.85 331.55 916.95 331.5 916.95 331.45 917 331.4 917.5 330.8 917.55 330.8 918.3 329.95 918.35 329.9 920.25 328.25 920.3 328.2 920.4 328.15 922.05 327.15 922.15 327.1 923.25 326.6 923.35 326.55 924.05 326.35 924.15 326.3 924.25 326.25 925.25 326.05 925.3 326.05 925.5 326 925.6 326 925.8 326 927.6 325.95 927.65 325.95"
        />
        <path
          stroke="none"
          fill="url(#gradient12)"
          d="M913.95 306.6 L915.95 305.25 917.9 304.15 917.95 304.1 919.85 303.25 919.9 303.25 921.75 302.65 921.8 302.6 923.55 302.2 926.75 301.85 927.7 301.85 927.8 301.85 930.6 302.1 930.7 302.1 932.5 302.5 932.65 302.55 932.7 302.6 933.05 303 933 303.6 932.6 304 928.35 305.5 928.2 305.55 926.55 306.4 926.5 306.45 926.4 306.5 925.75 306.9 925.65 306.9 924.25 307.9 923.15 308.8 922.2 309.65 922.15 309.75 922 309.9 921.95 309.9 920.85 311.15 920.5 311.55 920.45 311.6 920.3 311.8 919.8 312.45 919.8 312.5 918.75 314 918.05 315.2 917.95 315.35 916.85 317.45 916.9 317.45 916.05 319.35 914.6 323.15 914.65 323.15 913.85 325.75 913.8 325.8 912.6 330.55 Q911.6 335 910.7 340.9 L910.7 340.85 910.4 343.5 896.2 343.5 896.25 343.4 897 338.4 897.05 338.4 Q898.35 332.25 900.3 326.85 L902.25 322.15 902.25 322.1 905.4 316.2 905.45 316.15 907.6 313.05 908.6 311.8 908.65 311.75 908.7 311.65 909.3 310.95 909.75 310.45 909.9 310.3 910.1 310.1 910.2 310 910.2 309.95 912.05 308.2 912.05 308.15 913.95 306.6"
        />
        <path
          stroke="none"
          fill="url(#gradient13)"
          d="M1056.3 266.2 L1056.3 266.25 1056.2 267.1 1054.7 269.95 1053.85 272.15 1053.8 272.2 1052.35 276.65 1051.4 280.35 1050.9 282.35 1050.4 284.5 1048.1 296.75 1046.2 309.5 1044.15 326.35 1043.4 332.65 1042.7 341.25 1032.45 341.25 1032.45 341.1 1034.3 331.35 1035.5 325.05 1039.35 306.75 1039.35 306.7 1040.75 301 1040.75 300.95 1044.35 287.85 1046.6 281.1 1047.35 279.05 1049.5 273.75 1049.5 273.7 1050.9 270.9 1052.15 268.65 1052.15 268.6 1053.85 266.1 1053.95 265.95 1054.15 265.7 Q1054.45 265.35 1054.9 265.3 L1055.8 265.45 Q1056.2 265.7 1056.3 266.2"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M978.4 233.55 Q978.9 233.65 979.2 234.1 L979.8 235.05 979.85 235.15 981 237.2 981.05 237.3 982.55 240.45 982.55 240.5 983.85 243.5 983.9 243.5 986.4 250.45 987.2 252.95 988.8 258.3 991.05 267.25 991.75 270.5 994.15 282.4 994.15 282.45 997.05 300.85 1001.75 341.15 1001.75 341.25 990.35 341.25 989.95 325.95 989.35 311.2 988.1 293.8 986.6 278.2 985.8 271.55 983.8 258.7 983.8 258.75 981.7 248.85 981.7 248.9 980.5 244.65 980.5 244.6 980.45 244.5 980.45 244.4 977.65 236.55 977.55 236.35 977.05 235.35 977.05 235.25 Q976.8 234.8 977 234.35 977.1 233.9 977.5 233.7 L978.45 233.55 978.4 233.55 M1029.6 240.5 L1030.1 241.25 1030.1 241.3 1031.8 252.75 1032.8 262.9 1032.8 262.95 1033.6 276.85 1033.6 276.9 1033.75 283.05 1033.75 283.1 1033.6 302.05 1033.6 302.1 1032.1 332.95 1032.1 333 1031.35 341.25 1019.9 341.25 1019.9 341.1 1022.95 320.9 1023.9 314.2 1025.4 300.7 1026.6 287.6 1027.35 277.55 1027.95 262.45 1028 253 1027.65 241.6 Q1027.6 241.15 1027.9 240.75 L1027.95 240.7 Q1028.25 240.35 1028.7 240.3 L1029.6 240.5 M952.35 330.55 L953.05 330 953.1 330 953.2 329.95 953.5 329.9 953.55 329.9 954.1 329.9 954.15 329.9 954.75 330 954.8 330 955.65 330.35 956.4 330.85 956.4 330.9 957.85 332.35 959.15 334.3 960.45 336.6 961.65 339.3 961.7 339.3 962.35 340.95 962.4 341.25 957.55 341.25 957.45 340.7 957.45 340.75 956.7 338.1 955.95 335.9 955.95 335.85 955.55 334.9 955.15 334.15 955.15 334.1 954.4 333 954.4 332.95 954.1 332.65 953.95 332.55 953.9 332.5 953.7 332.4 953.55 332.4 952.75 332.2 Q952.35 331.95 952.25 331.55 L952.25 331.5 Q952.1 331.05 952.35 330.6 L952.35 330.55 M1059.6 298.55 Q1060.3 298.1 1061.05 297.85 L1062.5 297.55 1063.75 297.6 1064.2 297.7 1064.4 297.75 1064.45 297.8 1064.6 297.8 1064.65 297.85 1064.75 297.85 1065.45 298.15 1065.45 298.2 1065.55 298.2 1066.05 298.5 1066.2 298.6 1066.3 298.65 1066.8 299.35 1066.75 300.2 1066.7 300.25 1066.05 300.85 1066 300.85 1065.1 300.8 1064.95 300.75 1064.85 300.7 1064.75 300.65 1064.6 300.6 1064.45 300.55 1064.4 300.55 1064 300.45 1063.95 300.4 1063.8 300.4 1063.45 300.35 1062.9 300.45 1062.2 300.65 1062.2 300.7 Q1061.8 300.85 1061.45 301.15 L1060.65 301.9 1060.7 301.9 1059.9 302.95 1058.4 305.65 1057.7 307.3 1057.1 309.05 1055.9 313.05 1055.9 313.1 1054.85 317.5 1053.85 322.3 1053 327.45 1052.25 332.8 1051.5 338.4 1051.2 341.25 1043.15 341.25 1043.2 341.1 1045.15 331.5 1046.55 326.05 1047.95 320.9 1048 320.9 1049.5 316 1051.15 311.5 1052.05 309.4 1052.95 307.4 1053.85 305.55 1053.9 305.5 1054.85 303.8 1055.9 302.2 1057.05 300.75 1058.2 299.55 1058.25 299.5 1059.6 298.55"
        />
        <path
          stroke="none"
          fill="url(#gradient14)"
          d="M976.55 263.2 Q976.9 263.6 976.85 264.1 L976.6 269.05 976.6 273.15 977.4 285.85 977.4 285.8 977.95 290.9 978.6 296.35 984.65 336.85 985.45 341.1 985.45 341.25 969.3 341.25 967.9 329.8 967.05 324.15 966.15 318.7 965.15 313.6 964.05 308.9 962.85 304.65 961.55 300.9 960.2 297.8 958.8 295.4 958.8 295.35 958.1 294.5 957.4 293.75 956.75 293.2 956.25 292.85 956.2 292.8 956.15 292.8 955.75 292.6 955.35 292.45 955.3 292.45 955.25 292.45 955.15 292.4 955.1 292.4 Q954.65 292.3 954.4 291.9 954.15 291.55 954.2 291.1 L954.2 291.05 Q954.25 290.55 954.65 290.25 955 289.95 955.5 290 L955.55 290 955.75 290 955.8 290 955.85 290 955.9 290.05 956 290.05 956.6 290.2 957.35 290.45 957.4 290.45 958.2 290.85 958.25 290.85 959.25 291.5 959.3 291.55 960.25 292.3 960.25 292.35 961.3 293.35 962.3 294.6 963.3 296 965.2 299.25 967.05 303.1 967.95 305.2 968.8 307.45 968.8 307.4 970.45 312.2 972.05 317.3 973.55 322.75 974.15 325.05 973.85 322.05 973.85 322 972.55 296.8 972.45 291.25 972.45 286 972.5 283.6 972.5 283.55 973 273.2 973.45 269.15 973.45 269.1 973.85 266.6 973.85 266.45 974.4 263.75 974.45 263.7 Q974.55 263.3 974.85 263.05 L974.9 263 975.7 262.75 Q976.25 262.8 976.55 263.2"
        />
        <path
          stroke="none"
          fill="url(#gradient15)"
          d="M1026.3 228.15 L1024.2 234.45 1022.2 241.85 1020.05 251.5 1018.15 262.65 1015.75 282.95 1015.15 289.95 1014.45 299.85 1013.95 311.7 1013.9 313.45 1013.7 332.9 1013.7 332.95 1013.1 341.25 1002.1 341.25 1002.15 332.55 1002.15 332.5 1002.35 329 1002.6 325.45 1002.65 325.45 1003.35 318.25 1006.95 289.05 Q1008 282 1009.35 274.95 L1014.25 253.8 1014.25 253.7 1019.1 238.65 1019.15 238.6 1022.35 230.75 1023.25 228.8 1024 227.2 1024.65 226.6 Q1025.1 226.4 1025.55 226.6 L1025.5 226.55 1026.25 227.2 1026.25 227.25 Q1026.45 227.65 1026.3 228.15"
        />
        <path
          stroke="none"
          fill="url(#gradient16)"
          d="M1068.6 313.95 L1068.6 314 1068.35 314.3 1068.3 314.4 1068 314.9 1068 314.95 1067.35 316.2 1067.3 316.25 1067.3 316.35 1067.25 316.4 1067.15 316.65 1066.65 318 1065.5 321.85 1065.1 323.3 1065.1 323.35 1064.7 324.95 1063.25 332.4 1061.85 341.25 1055.3 341.25 1055.35 341.05 1057.5 333.3 1057.5 333.25 1060.65 323.75 1060.65 323.7 1062.5 319.2 1063.7 316.75 Q1064.8 314.65 1065.8 313.45 L1065.8 313.4 1066.05 313.1 1066.25 312.85 1066.75 312.35 Q1067.05 312.05 1067.55 312 1067.95 311.95 1068.35 312.25 L1068.85 313.05 1068.85 313.1 1068.6 313.95"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1135.9 340.1 Q1126.5 278.7 1135.9 227.65 1135.65 268.55 1141 314.55 1145.35 284.75 1147 257.1 1151.55 296.05 1145.05 340.1 L1135.9 340.1 M1161 260.25 Q1166.2 273.65 1170.1 288.15 1170.05 259.55 1174.8 233.6 1174.5 283.15 1182.4 340.1 L1171.65 340.1 Q1168.3 297.55 1161 260.25 M1097 270 Q1102.2 283.4 1106.1 297.9 1106.05 269.3 1110.8 243.35 1110.5 288.65 1117.1 340.1 L1106.8 340.1 Q1103.45 303 1097 270"
        />
        <path
          stroke="none"
          fill="url(#gradient17)"
          d="M1125.45 264.85 Q1125.25 300.55 1129.3 340.1 L1121.45 340.1 Q1119 300.05 1125.45 264.85"
        />
        <path
          stroke="none"
          fill="url(#gradient18)"
          d="M1156.3 236.15 Q1165.05 283.65 1157.55 340.1 L1149.05 340.1 Q1156.6 284.6 1156.3 236.15"
        />
        <path
          stroke="none"
          fill="url(#gradient19)"
          d="M1189.45 255.1 Q1189.2 293.4 1193.9 336.15 1195 319 1197.95 302.85 1197.85 321 1198.85 340.1 L1186.15 340.1 Q1182.2 294.55 1189.45 255.1"
        />
        <path
          stroke="none"
          fill="url(#gradient20)"
          d="M1087.45 274.1 Q1089.65 292.95 1089.3 313.05 1092.5 277.9 1092.3 245.9 1100.3 289.3 1094.7 340.1 L1075.2 340.1 Q1076.15 320.85 1079.45 302.85 1079.35 320.6 1080.3 339.25 1085.6 305.3 1087.45 274.1"
        />
        <path
          stroke="none"
          fill="url(#gradient21)"
          d="M1284.05 253 Q1284.5 248.55 1287.9 245.7 1291.35 242.85 1295.75 243.3 1300.2 243.7 1303.05 247.15 1305.9 250.6 1305.45 255 1301.55 296.6 1301.05 344.75 L1279.55 344.75 Q1280 295.5 1284.05 253"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1202.6 277.8 Q1202.05 273.4 1204.8 269.9 1207.5 266.35 1211.95 265.8 1216.35 265.25 1219.85 268 1223.35 270.75 1223.95 275.15 1228.15 309.05 1228.9 344.75 L1207.4 344.75 Q1206.6 310.4 1202.6 277.8 M1255 233.75 Q1255 229.3 1258.15 226.15 1261.3 223 1265.75 223 1270.2 223 1273.35 226.15 1276.5 229.3 1276.5 233.75 L1276.5 344.75 1255 344.75 1255 233.75 M1307.05 303.5 Q1307.45 299.1 1310.9 296.25 1314.3 293.4 1318.7 293.8 1323.15 294.2 1326 297.6 1328.85 301.05 1328.45 305.45 1326.7 325.05 1325.7 344.75 L1304.15 344.75 Q1305.15 324.1 1307.05 303.5"
        />
        <path
          stroke="none"
          fill="url(#gradient22)"
          d="M1228.8 287.95 Q1228.5 283.5 1231.45 280.15 1234.4 276.8 1238.85 276.5 1243.25 276.2 1246.6 279.15 1249.95 282.1 1250.25 286.55 1252.1 315.65 1252.7 344.75 L1231.2 344.75 Q1230.6 316.35 1228.8 287.95"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1379.55 278 L1379.55 233.75 Q1379.55 229.3 1382.7 226.15 1385.85 223 1390.3 223 1394.75 223 1397.95 226.15 1401.1 229.3 1401.1 233.75 L1401.1 253.4 1401.1 344.75 1379.55 344.75 1379.55 278 M1419.5 297.1 L1420.45 296.25 Q1423.85 293.4 1428.3 293.8 1432.7 294.2 1435.55 297.6 1438.4 301.05 1438.05 305.45 1436.25 325.05 1435.25 344.75 L1414.85 344.75 1419.5 297.1 M1367.7 344.75 L1351.75 344.75 1350 323.2 Q1349.65 318.8 1352.5 315.35 1355.35 311.95 1359.75 311.55 1362.4 311.3 1364.7 312.2 L1367.7 344.75"
        />
        <path
          stroke="none"
          fill="url(#gradient23)"
          d="M1401.1 344.75 L1401.1 253.4 1401.1 253 Q1401.55 248.55 1405 245.7 1408.4 242.85 1412.85 243.3 1417.25 243.7 1420.1 247.15 1422.95 250.6 1422.55 255 1420.6 275.25 1419.5 297.1 L1414.85 344.75 1401.1 344.75"
        />
        <path
          stroke="none"
          fill="url(#gradient24)"
          d="M1379.55 278 L1379.55 344.75 1367.7 344.75 1364.7 312.2 1363.35 287.95 Q1363.05 283.5 1366 280.15 1368.95 276.8 1373.4 276.5 1376.8 276.3 1379.55 278"
        />
        <path
          stroke="none"
          fill="url(#gradient25)"
          d="M1549.05 233.8 L1549.35 233.9 Q1549.85 234.2 1550 234.75 L1550.4 236.8 1550.4 236.9 1550.7 239.2 1550.7 239.25 1550.8 240.7 1550.8 246.6 1550.25 251.9 1549.2 257.15 1548.8 258.8 1547.4 263 1545.9 265.95 1544.05 268.6 1544 268.7 1539.15 274.4 1539.1 274.45 1536.75 277.7 1536.2 278.7 Q1535.45 280.15 1535 281.35 L1534.2 284.15 Q1533.55 287.15 1533.6 290.05 L1533.7 291.65 1534.8 299.15 1534.85 299.25 1535.35 302.1 1535.35 302.2 1535.35 302.25 1535.4 302.3 1535.95 307.2 1536 308.1 1536 308.15 1536.45 318.45 1536.5 318.55 1536.5 325.35 1536.05 329.55 1535 335.75 1533.65 341.7 1533.05 343.95 1533 344.05 1532.45 345.8 1518.4 345.8 Q1527.25 283.15 1549.05 233.8"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1549.05 233.8 Q1527.25 283.15 1518.4 345.8 L1511.25 345.8 Q1517.85 272.05 1497.65 222.3 L1498.1 222 1499.15 222.05 1499.6 222.3 1499.65 222.3 1499.7 222.35 1500.65 222.9 1500.7 222.9 1501.05 223.1 1503.35 224.75 1504.5 225.7 1504.55 225.75 1504.6 225.8 1507.35 228.55 1507.4 228.6 1508.25 229.65 1508.35 229.7 1511.25 233.8 1513.85 238.65 1516.2 244.9 1516.9 247.65 1517.35 250.5 1517.4 253.7 1517.15 256.25 1517.15 256.3 1514.6 268.35 1514.2 271.55 1514.15 275.2 1514.2 275.3 1514.2 275.4 1514.55 278.8 1514.55 278.85 1515.25 282.45 1515.9 284.9 1519.7 295.95 1520.35 298.15 1524.25 291.3 1524.3 291.2 1524.35 291.1 1526.1 287.6 1527.3 284.55 1527.35 284.45 1527.35 284.4 1528.3 281.2 1528.8 277.95 1528.95 274.65 1528.95 274.55 1528.8 271.35 1528.25 264.9 1528.25 261.6 1528.55 259 1528.95 257.2 1529.7 255.05 1530.9 252.3 1533.25 247.95 1534.8 245.65 1537.15 242.65 1540.15 239.45 1540.2 239.4 1541.5 238.2 1541.55 238.2 1541.6 238.15 1542.85 237.1 1542.9 237.1 1542.95 237.05 1546.2 234.8 1548.05 233.85 1548.3 233.75 1549.05 233.8 M1504.5 345.8 L1493.9 345.8 Q1490.45 299.05 1472.85 265.7 L1473.4 265.85 1475.25 266.8 1478.5 269.05 1478.55 269.05 1478.55 269.1 1478.6 269.1 1479.85 270.15 1479.9 270.15 1479.95 270.2 1481.25 271.4 1481.3 271.45 1484.3 274.6 1484.95 275.4 1485.05 275.5 1488.2 279.95 1490.55 284.3 1492.05 287.8 1492.9 291 1493.2 293.6 1493.25 295.4 1493 299.75 1492.65 303.35 1492.5 306.55 1492.5 306.65 1492.65 309.95 1493.15 313.2 1494.1 316.4 1494.1 316.45 1494.15 316.55 1495.65 320.3 1497.1 323.1 1497.15 323.2 1497.2 323.3 1499.65 327.4 Q1500.25 338.85 1504.5 345.8 M1545.85 345.8 L1537.6 345.8 1537.45 345.2 1536.8 341.65 1536.8 341.6 1536.65 339.7 1536.7 336.7 1536.95 334.15 1538.4 327.3 1539.4 323.75 1539.9 322.4 1539.9 322.35 1540.45 321.15 1540.45 321.05 1541.05 319.85 1541.1 319.8 1541.1 319.75 1542.45 317.5 1542.5 317.4 1545.15 313.25 1545.2 313.2 1546.45 310.95 1546.45 310.9 1547.45 308.55 1548.3 305.6 1548.35 305.45 1548.35 305.4 1548.35 305.3 1548.55 304.15 1548.65 303 1548.65 302.95 1548.55 300.25 1547.35 292.5 1547.25 289.6 1547.35 288.35 1547.35 288.25 1547.45 287.5 1547.95 285.65 1548.5 284.3 1549.8 281.95 1552 278.85 1552.05 278.8 1552.1 278.75 1552.8 277.9 1552.85 277.9 1553.55 277.15 1553.65 277.05 1553.8 276.9 1555.75 275.2 1555.8 275.1 1555.85 275.1 1555.9 275.05 1557.35 274 1557.45 273.9 1558.8 273.05 1558.9 273.05 1558.9 273 1558.95 273 1560.3 272.3 1560.35 272.25 1562.85 271.25 1562.9 271.25 1564.9 270.65 1564.95 270.65 1566.65 270.4 1566.7 270.4 Q1567.3 270.35 1567.8 270.7 1549.65 295.15 1545.85 345.8 M1459.4 327.25 L1459.45 327.05 1459.65 326.5 1460.2 325.5 1461.15 324.3 1461.35 324.1 1461.6 323.85 1461.65 323.8 1461.75 323.7 1462.45 323.15 1463.95 322.2 1464 322.15 1464.05 322.15 1465.45 321.6 1465.9 321.45 1467.8 321.15 1470.15 321.15 1470.25 321.15 1470.45 321.2 1471 321.3 1472.15 321.5 1474.4 322.3 1476.55 323.45 1477.55 324.1 1477.55 324.15 1479.4 325.7 1481.45 328 1481.5 328.1 1481.7 328.35 1481.75 328.45 1481.8 328.5 1482.45 329.55 1483.2 331.05 1483.7 332.5 1483.95 334 1484 336.05 1483.5 339.15 1482.9 341.75 1482.8 342 1482.8 342.1 1482.75 342.15 1482.25 344.35 1482.05 345.8 1476.9 345.8 Q1472.65 329.55 1459.4 327.25 M1564.6 345.8 L1560.7 345.8 1561.35 344.7 1561.35 344.65 1562.4 342.15 1562.4 342.1 1562.45 342.05 1562.6 341.55 1562.6 341.5 1562.6 341.45 1563 339.6 1563 339.1 1563.05 339.05 1563.05 338.95 1563.05 338.85 1563 336.8 1562.8 335.5 1562.3 333.15 1562.25 333.1 1561.15 328.3 1561.05 327.15 1561.05 327.05 1561.05 325.55 1561.35 323.5 1561.55 322.8 1562.45 320.75 1563.25 319.5 1563.3 319.45 1563.35 319.35 1563.55 319.1 1563.6 319 1565.1 317.2 1566.75 315.7 1567.5 315.15 1567.5 315.1 1568.5 314.45 Q1569.4 313.85 1570.65 313.3 L1572.9 312.5 1574.05 312.3 1574.6 312.2 1574.8 312.15 1574.85 312.15 1577 312.1 1577.25 312.15 1579.15 312.45 1581 313.15 1581.05 313.15 1581.1 313.2 1583.3 314.7 1583.4 314.8 1583.45 314.85 1583.8 315.25 Q1569.05 324.6 1564.6 345.8"
        />
        <path
          stroke="none"
          fill="url(#gradient26)"
          d="M1545.85 345.8 Q1549.65 295.15 1567.8 270.7 L1568.35 271.7 1568.6 273.45 1568.6 273.5 1568.6 273.55 1568.75 275.45 1568.8 279.45 1568.75 279.55 1568.55 282.6 1568.55 282.65 1568.55 282.7 1568.3 284.3 1568.3 284.35 1568.3 284.4 1568.15 285.25 1566.8 290.65 1566.75 290.75 1566.7 290.85 1565.95 292.8 1565.55 293.55 1565.3 293.95 1565.25 294.05 1564.6 294.95 1564.55 295 1564.2 295.45 1564.15 295.5 1564.05 295.6 1562.95 296.75 1558.55 300.65 1557 302.35 1556 303.75 1555.45 304.7 1554.9 306 1554.7 306.75 1554.65 306.85 1554.65 306.9 1554.35 308.55 1554.35 308.6 1554.2 310.05 1554.35 312.35 1554.35 312.4 1554.8 314.7 1557.1 321.55 1557.1 321.6 1557.45 322.7 1557.45 322.75 1557.5 322.85 1558.05 325.3 1559.4 333.7 1559.4 333.75 1559.75 337.95 1559.65 341.3 1558.95 345.8 1545.85 345.8"
        />
        <path
          stroke="none"
          fill="url(#gradient27)"
          d="M1511.25 345.8 L1504.5 345.8 Q1500.25 338.85 1499.65 327.4 L1499.5 325.8 1499.65 320.2 1500.1 315.65 1500.1 315.6 1500.15 315.55 1500.85 311 1500.85 310.9 1502.25 302.65 1503.2 298.25 1506.25 288.5 1507.1 285.35 1507.1 285.25 1507.45 283.7 1507.45 283.65 1507.65 282.05 1507.65 281.95 1507.85 279.35 1507.75 275.9 1507.75 275.85 1507.75 275.8 1507.4 273.55 1506.4 269.95 1504.65 266.05 1500.7 259.05 1500.65 259 1500.6 258.95 1500.6 258.9 1499.25 256.05 1499.25 255.95 1499.2 255.85 1498 252.1 1497.7 250.45 1496.7 242.9 1496.4 237.15 1496.4 234.35 1496.4 234.2 1496.45 230.95 1496.45 230.9 1496.55 229.4 1496.55 229.3 1496.55 229.2 1496.65 227.75 1496.65 227.65 1496.9 225.25 1496.9 225.2 1496.95 225.15 1497 224.8 1497 224.75 1497 224.7 1497.25 223.05 1497.35 222.7 1497.65 222.3 Q1517.85 272.05 1511.25 345.8"
        />
        <path
          stroke="none"
          fill="url(#gradient28)"
          d="M1493.9 345.8 L1485.2 345.8 1485.45 340.15 1485.45 340.05 1485.5 339.15 1486.05 334.3 1486.1 334.25 1486.1 334.2 1486.1 334.1 1486.6 331.25 1486.65 331.15 1487.4 326.6 1487.75 323.65 1487.85 322 Q1487.9 319.15 1487.25 316.1 L1487.15 315.75 1486.45 313.3 1485.25 310.65 1484.7 309.7 1482.55 306.65 1482.4 306.5 1482.35 306.45 1482.3 306.4 1477.45 300.65 1477.4 300.6 1475.2 297.4 1473.8 294.45 1473.15 292.45 1472.25 289.15 1471 282.75 1470.65 278.55 1470.65 272.7 1470.65 272.65 1470.75 271.25 1470.75 271.2 1471.05 268.85 1471.05 268.8 1471.55 266.5 Q1471.8 266 1472.35 265.8 L1472.85 265.7 Q1490.45 299.05 1493.9 345.8"
        />
        <path
          stroke="none"
          fill="url(#gradient29)"
          d="M1459.4 327.25 Q1472.65 329.55 1476.9 345.8 L1473.3 345.8 1472.4 344.9 1468.3 341.85 1468.25 341.85 1468.2 341.8 1468.15 341.75 1468.1 341.7 1467.65 341.35 1467.55 341.3 1466.65 340.45 1466.1 339.85 1466.05 339.8 1466 339.75 1465.55 339 1465.55 338.95 1465.45 338.85 1465.4 338.65 1465.35 338.6 1465.35 338.55 1465.25 338.4 1465.25 338.35 1465.2 338.25 1465.2 338.2 1465.2 338.15 1465.05 337.8 1465.05 337.75 1464.95 337.4 1464.8 336.75 1464.8 335.8 1464.8 335.7 1464.8 335.55 1464.8 335.4 1464.8 335.35 1464.85 334.7 1464.8 334.65 1464.8 334.55 1464.8 334.45 1464.8 334.4 1464.75 334.05 1464.7 333.95 1464.5 333.25 1464.45 333.2 1464.4 333.1 1464.4 333.05 1464.15 332.65 1464.1 332.55 1464.05 332.45 1464 332.45 1464 332.4 1463.6 331.85 1462.7 331 1461.45 330 1461.4 330 1461.4 329.95 1460.8 329.5 1460.65 329.4 1460.6 329.35 1460.1 329.05 1459.4 328.2 Q1459.25 327.7 1459.4 327.25"
        />
        <path
          stroke="none"
          fill="url(#gradient30)"
          d="M1564.6 345.8 Q1569.05 324.6 1583.8 315.25 L1584.8 316.45 1584.8 316.5 1585.4 317.5 1585.6 318.05 1585.65 319.15 1584.95 320.05 1584.45 320.35 1584.4 320.4 1583.8 320.85 1583.65 320.95 1583.6 321 1582.35 322 1582.3 322 1581.9 322.4 1581.3 323.05 1581.05 323.4 1581.05 323.45 1581 323.45 1580.95 323.55 1580.9 323.65 1580.65 324.05 1580.6 324.1 1580.6 324.2 1580.55 324.2 1580.55 324.25 1580.3 324.95 1580.3 325.05 1580.25 325.4 1580.25 325.45 1580.2 325.55 1580.2 325.65 1580.2 325.7 1580.2 326.35 1580.25 326.4 1580.25 326.55 1580.25 326.7 1580.25 326.8 1580.25 327.75 1580.1 328.4 1580 328.75 1580 328.8 1579.85 329.15 1579.85 329.2 1579.8 329.25 1579.8 329.35 1579.75 329.4 1579.7 329.55 1579.7 329.6 1579.65 329.65 1579.55 329.85 1579.05 330.75 1579 330.8 1578.95 330.85 1578.4 331.45 1576.95 332.7 1576.9 332.75 1576.85 332.8 1576.75 332.85 1572.65 335.9 1571.45 337.1 1571.15 337.4 1571.1 337.45 1570.4 338.45 1569.55 340.15 1569.5 340.3 1569.15 342 1569.05 343.6 1569.1 344.35 1569.3 345.8 1564.6 345.8"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1704.2 319.9 Q1702.65 319.35 1701.85 318.05 1701.05 316.9 1701.05 315.4 1701.05 313.45 1702.45 312.1 1703.8 310.7 1705.75 310.7 1707.75 310.7 1709.1 312.1 1710.5 313.45 1710.5 315.4 1710.5 317.35 1709.1 318.75 1707.75 320.15 1705.75 320.15 L1704.2 319.9 M1682.3 275.4 L1681.35 274.55 Q1678.8 272 1678.8 268.45 1678.8 264.85 1681.35 262.35 1683.85 259.8 1687.45 259.8 1691 259.8 1693.55 262.35 1696.05 264.85 1696.05 268.45 1696.05 272 1693.55 274.55 1691 277.05 1687.45 277.05 L1685.4 276.85 Q1683.6 276.75 1682.3 275.4 M1622.95 256.25 L1621.55 256.25 Q1618 256.05 1615.6 253.35 1613.25 250.7 1613.5 247.1 1613.7 243.55 1616.35 241.15 1619.05 238.8 1622.6 239.05 1626.15 239.25 1628.55 241.9 1630.9 244.6 1630.7 248.15 1630.45 251.75 1627.8 254.1 L1625.8 255.45 Q1624.75 256.1 1622.95 256.25 M1647.7 239.95 L1645.3 238.4 Q1642.6 236.05 1642.4 232.5 1642.2 228.9 1644.55 226.25 1646.9 223.55 1650.5 223.35 1654.05 223.15 1656.75 225.5 1659.4 227.85 1659.6 231.45 1659.85 235 1657.5 237.7 1655.1 240.35 1651.55 240.55 L1650.9 240.6 Q1649.55 240.75 1647.7 239.95 M1612.5 278.4 Q1609.5 278.1 1607.3 275.9 1604.8 273.35 1604.8 269.8 1604.8 266.2 1607.3 263.7 1609.85 261.15 1613.4 261.15 1617 261.15 1619.5 263.7 1622.05 266.2 1622.05 269.8 1622.05 273.35 1619.5 275.9 1618.05 277.35 1616.3 277.95 1614.4 278.65 1612.5 278.4 M1600 301.4 Q1598.25 302.25 1596.15 302.25 1592.6 302.25 1590.05 299.75 1587.55 297.2 1587.55 293.65 1587.55 290.05 1590.05 287.55 1592.6 285 1596.15 285 1599.75 285 1602.25 287.55 1604.8 290.05 1604.8 293.65 1604.8 296.8 1602.85 299.1 1601.9 300.35 1600 301.4 M1662.1 264.6 Q1660.85 264.3 1659.9 263.25 1658.6 261.8 1658.7 259.85 1658.8 257.85 1660.25 256.55 1661.7 255.25 1663.65 255.35 1665.6 255.45 1666.9 256.9 1668.2 258.35 1668.1 260.3 1668 262.25 1666.55 263.55 L1665.1 264.5 1662.1 264.6 M1594.7 337.2 Q1593.6 337.85 1592.25 337.85 1590.3 337.85 1588.95 336.45 1587.55 335.1 1587.55 333.15 1587.55 331.2 1588.95 329.8 1590.3 328.45 1592.25 328.45 1594.2 328.45 1595.6 329.8 1596.95 331.2 1596.95 333.15 L1596.7 334.75 Q1596.1 336.2 1594.7 337.2 M1698.75 300.85 Q1699 299.5 1700.05 298.5 1701.4 297.1 1703.35 297.1 1705.35 297.1 1706.7 298.5 1708.1 299.85 1708.1 301.85 1708.1 303.8 1706.7 305.15 1705.35 306.55 1703.35 306.55 1701.4 306.55 1700.05 305.15 L1699.15 303.9 Q1698.45 302.4 1698.75 300.85"
        />
        <path
          stroke="none"
          fill="url(#gradient31)"
          d="M1625.8 255.45 L1627.1 258.55 1627.1 258.6 1628.25 261.65 1628.25 261.7 1630.35 268.75 1630.35 268.8 1630.6 269.8 1632.05 269.7 Q1634.1 269.8 1635.45 271.35 1636.8 272.9 1636.65 274.95 1636.55 276.95 1635 278.3 1634 279.25 1632.75 279.5 L1633.95 285.85 1634.5 289.1 1636.1 301.15 1636.15 301.15 1636.5 305.15 1637.15 295.4 1637.15 295.35 Q1637.75 288.3 1638.65 281.15 L1642.25 259.7 1642.25 259.65 1646.2 244.3 1646.2 244.25 1647.7 239.95 Q1649.55 240.75 1650.9 240.6 L1649.5 247.3 Q1648.65 251.85 1647.95 257.1 L1647.95 257.05 1646.7 268.35 1645.55 288.75 1645.4 295.8 1645.3 305.7 1645.45 313.4 Q1647.3 313.35 1648.75 314.6 1650.25 316 1650.4 318 1650.5 320.05 1649.15 321.6 1647.8 323.15 1645.75 323.25 L1646.5 338.75 1646.5 338.8 1646.45 344.4 1629.35 344.4 1629.6 329.6 1629.4 312.15 1629.45 312.15 1628.9 296.45 1628.45 289.8 1627.25 276.8 1627.25 276.85 1627.2 276.6 Q1626.75 275.6 1626.8 274.35 L1626.85 274.15 1625.75 266.9 1625.7 266.9 1624.8 262.6 1624.8 262.45 1624.75 262.35 1622.95 256.25 Q1624.75 256.1 1625.8 255.45"
        />
        <path
          stroke="none"
          fill="url(#gradient32)"
          d="M1665.1 264.5 L1665.75 271.15 1665.75 271.2 1666.25 281.35 1666.25 281.4 1666.3 292.2 Q1667.4 292.35 1668.15 293.2 1669.05 294.2 1668.95 295.5 1668.9 296.85 1667.9 297.7 1667.15 298.4 1666.2 298.5 L1666.1 301.55 1665 320.5 1665 320.55 1662.6 344.4 1652.25 344.4 1653.4 338.8 1654.7 332.1 1656.9 318.7 1658.75 305.7 1660 295.7 1661.4 280.65 1661.95 271.25 1662.1 264.6 1665.1 264.5"
        />
        <path
          stroke="none"
          fill="url(#gradient33)"
          d="M1685.4 276.85 L1684.45 279.8 1683.45 283.5 1682.95 285.55 1682.5 287.65 1680.2 299.95 1678.3 312.7 1676.2 329.55 1675.5 335.85 1675.5 335.8 1674.75 344.4 1664.5 344.4 1664.5 344.25 1666.4 334.5 1667.55 328.2 1667.6 328.2 1671.45 309.9 1672.85 304.15 1676.45 291.05 1676.45 291 1678.65 284.3 1678.7 284.3 1679.4 282.25 1679.45 282.25 1681.6 276.95 1681.6 276.9 1682.3 275.4 Q1683.6 276.75 1685.4 276.85"
        />
        <path
          stroke="none"
          fill="url(#gradient34)"
          d="M1616.3 277.95 L1617 289 1617.5 294.1 1618.15 299.55 1618.15 299.5 1622.5 328.5 Q1623.45 328.65 1624.15 329.35 1625.1 330.3 1625.1 331.6 1625.1 332.95 1624.15 333.85 L1623.4 334.45 1624.25 340.05 1624.2 340 1625 344.25 1625 344.4 1608.85 344.4 1607.5 332.95 1607.5 333 1606.65 327.3 1605.7 321.9 1604.7 316.8 1603.6 312.1 1602.45 307.85 1602.4 307.8 1601.15 304.1 1600 301.4 Q1601.9 300.35 1602.85 299.1 L1602.85 299.15 1604.8 302.45 1606.65 306.25 1607.5 308.35 1608.4 310.6 1608.35 310.6 1610.05 315.35 1611.6 320.5 1613.1 325.95 1613.7 328.25 1613.45 325.2 1613.45 325.15 1612.35 304.9 Q1610.55 304.8 1609.25 303.5 1607.85 302.05 1607.85 300 1607.85 297.95 1609.25 296.5 1610.45 295.35 1612 295.1 L1612 294.4 1612 289.2 1612.05 286.75 1612.05 286.7 1612.5 278.4 Q1614.4 278.65 1616.3 277.95"
        />
        <path
          stroke="none"
          fill="url(#gradient35)"
          d="M1596.7 334.75 L1597.4 335.5 1597.4 335.55 1598.75 337.45 1600 339.8 1601.25 342.45 1601.25 342.5 1601.9 344.15 1601.95 344.4 1597.1 344.4 1597 343.9 1596.3 341.25 1595.55 339.05 1595.5 339.05 1595.15 338.1 1594.75 337.3 1594.7 337.2 Q1596.1 336.2 1596.7 334.75"
        />
        <path
          stroke="none"
          fill="url(#gradient36)"
          d="M1699.15 303.9 Q1698.8 304.1 1698.55 304.3 L1698.5 304.35 1697.75 305.1 1697.75 305.05 1696.95 306.15 Q1696.15 307.3 1695.5 308.85 L1694.8 310.5 1694.15 312.25 1692.95 316.25 1691.9 320.65 1691.6 322.1 Q1692.5 322.3 1693.2 323 1694.15 323.9 1694.15 325.25 1694.15 326.55 1693.2 327.5 1692.25 328.45 1690.95 328.45 L1690.45 328.4 1690.1 330.6 1689.3 336 1688.6 341.6 1688.3 344.4 1680.25 344.4 1680.25 344.25 1682.25 334.7 1682.25 334.65 1683.6 329.25 1685.05 324.05 1686.6 319.2 1688.25 314.7 1688.25 314.65 1689.1 312.6 1690 310.6 1690.95 308.7 1691.95 306.95 1693 305.4 1693 305.35 1694.1 303.95 1694.15 303.9 1695.3 302.75 1695.35 302.7 1696.7 301.7 Q1697.35 301.25 1698.1 301 L1698.15 301 1698.75 300.85 Q1698.45 302.4 1699.15 303.9"
        />
        <path
          stroke="none"
          fill="url(#gradient37)"
          d="M1704.2 319.9 L1703.7 321.2 1702.55 325 1702.55 325.05 1702.2 326.5 1702.15 326.5 1701.8 328.1 1700.3 335.6 1698.95 344.4 1692.4 344.4 1692.4 344.2 1694.55 336.45 1694.55 336.4 1697.7 326.95 1697.75 326.9 1699.55 322.4 1699.6 322.35 1700.75 319.95 1700.75 319.9 1701.85 318.05 Q1702.65 319.35 1704.2 319.9"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1747.9 273.65 L1746.35 272.55 1746.3 272.5 1746.25 272.5 1746.15 272.45 1745.1 271.75 1745 271.7 1742.1 270.15 1739.85 269.1 1737.35 268.05 1735.3 267.35 1735.25 267.3 1735.15 267.3 1734.5 267.1 1734.2 266.85 1734.1 266.45 1734.35 266.05 1734.75 265.95 1735.5 266.05 1735.55 266.05 1740.25 266.95 1743.1 267.8 1746.35 269 1746.7 269.15 1741.35 250.65 1737.85 240.5 1737.85 240.1 1738.1 239.8 1738.55 239.75 1738.9 240.05 1742.45 246.55 1747.5 257.2 1750.95 265.25 1752.5 269.05 1753.95 272.95 1755.85 274.2 1757.85 275.7 1758.35 276.1 1763.7 281.1 1765.6 283.15 1767.4 285.35 1769.15 287.7 1770.85 290.1 1772.45 292.65 1776.5 300 1778.65 304.85 1781.65 295.9 1782.55 293.55 1778.5 278.55 1775.2 268.7 1770.7 257.35 1769.3 254.3 1763.95 243.75 1756.65 231.85 1751.8 225.15 1749.45 222.15 1749.35 221.8 Q1749.35 221.55 1749.5 221.4 1749.65 221.25 1749.9 221.2 L1750.3 221.4 1752.3 223.25 1757.2 228.3 1760.3 231.75 1765.5 238.25 1768.2 241.9 1769.85 244.35 1773.2 249.5 1776.5 255.1 1780.55 262.65 1784.45 271.05 1787.95 280.1 1789.6 276.55 1794.75 266.6 1798.1 261 1801.45 255.85 1803.1 253.4 1807.95 246.95 1812.4 241.65 1815.6 238.15 1820.95 232.9 1821.35 232.7 1821.75 232.85 1821.95 233.25 1821.8 233.65 1818.65 237.7 1813.45 245.1 1809.95 250.65 1804.2 261.15 1800.6 268.85 1795.05 283.05 1794.25 285.5 1792.3 292.4 1786.6 316.45 1785.45 323.45 1785.5 323.65 1786.35 326.5 1787.75 332.9 1788.45 337.8 1789.05 345.75 1789.05 346.55 1775.7 346.55 Q1777.5 336.05 1773.65 322.6 L1772.2 314.6 1769.9 306.65 1768.95 304 1766.9 298.75 1766.35 297.5 1766.05 296.85 1766.05 296.8 1765.75 296.25 1764.6 293.8 1763.3 291.4 1762 289.15 1760.6 286.95 1759.2 284.9 1757.7 282.9 1757.25 282.4 1757.3 282.55 1747.9 273.65 M1803.7 326.45 L1803.5 328.4 1804.45 325.1 1805.4 322.25 1806.35 319.85 1807.3 317.55 1808.3 315.35 1809.3 313.25 1810.4 311.3 Q1811.5 309.4 1812.7 307.8 1813.95 306.2 1815.2 305.05 L1816.15 304.2 1816.2 304.2 1816.25 304.15 1816.45 303.95 1817.75 303.1 1817.9 303.05 1818 303 1818.25 302.85 1818.3 302.8 1818.7 302.65 1818.8 302.6 1818.85 302.55 1819.75 302.25 1819.85 302.2 1820.2 302.1 1821.35 301.9 1821.4 301.9 1821.45 301.85 1821.9 301.85 1822.1 301.85 1823.35 301.9 1823.4 301.9 1823.45 301.9 1823.65 301.95 Q1823.9 301.95 1824 302.1 L1824.2 302.5 1824 302.9 1823.6 303.1 1823.5 303.1 1823.25 303.1 1823.05 303.15 1822.95 303.15 1821.55 303.4 1821.45 303.45 1821.35 303.5 1820.3 303.95 1819.75 304.25 1819.7 304.3 1819.65 304.3 1819.6 304.35 1819.15 304.65 1819.1 304.7 1818.9 304.85 Q1817.9 305.65 1817.05 306.8 L1815.25 309.5 Q1814.5 310.85 1813.65 312.9 L1812.9 314.85 1812.25 316.9 1811.6 319.05 1811 321.35 1809.2 330.1 1808.2 336.9 1807.5 342.6 1807.25 345.45 1807 346.55 1798.8 346.55 1803.7 326.45 M1763.65 346.55 L1752.15 346.55 1751.8 342.65 1749.45 328.6 1746.85 317.45 1746 314.5 1743.1 306.2 1740.8 301.2 1739.6 298.9 1738.25 296.7 1736.75 294.45 1734.4 291.6 1734.35 291.55 1734.3 291.5 1734.05 291.2 1732.55 289.75 1730.65 288.15 1728.35 286.6 1725.65 285.25 1724.75 284.9 1724.7 284.85 1722.5 284.15 1722.45 284.15 1719.6 283.6 1719.25 283.4 1719.1 283 1719.25 282.6 1719.7 282.45 1721.3 282.45 1721.5 282.45 1721.65 282.45 1722.75 282.55 1722.8 282.55 1722.85 282.55 1725.25 282.95 1725.3 282.95 1725.4 283 1725.85 283.1 1725.95 283.1 1727.1 283.4 1730.25 284.6 1731.85 285.4 1734.6 287.15 1736.5 288.55 1738.15 289.95 1741.1 293 1741.95 294 1743.65 296.2 1745.3 298.55 1747.65 302.35 1748.05 303 1749.85 306.4 1754 315.9 1756.1 321.75 1756.7 323.75 1756.8 324.05 1756.8 324 1763.65 346.55 M1719.85 334.8 L1719.45 334.75 1719.15 334.45 1719.15 334 1719.45 333.7 1719.7 333.55 1719.75 333.55 1719.85 333.5 1722 332.8 1723.15 332.6 1723.8 332.5 1723.9 332.5 1725.25 332.5 1726.1 332.55 1727.8 332.85 1728.75 333.15 1729.05 333.3 1729.2 333.3 1729.65 333.5 1731.5 334.5 1733.3 335.8 1735.05 337.4 1736.7 339.25 1738.25 341.35 1739 342.45 1739.7 343.6 1741.1 346 1741.35 346.55 1736.4 346.55 1735.95 345.55 1735.45 344.45 1734.9 343.4 1733.75 341.4 1732.55 339.6 1731.25 338.05 1729.9 336.8 1728.5 335.8 1728.4 335.7 1727.8 335.4 1727.1 335.05 1725.7 334.6 1724.15 334.3 1724 334.3 1723.9 334.3 1723.25 334.3 1722.25 334.35 1720.7 334.55 1720.15 334.7 1720.1 334.7 1720.05 334.75 1719.95 334.75 1719.85 334.8 M1726.25 309.45 L1726.1 309.05 1726.2 308.65 Q1726.35 308.45 1726.6 308.45 L1727 308.55 1728.5 309.65 1728.55 309.7 1729.05 310.1 1729.1 310.15 1730 310.9 1732.05 312.85 1733.2 314.05 1734.4 315.4 1735.65 316.95 1735.75 317.05 1737.3 319.05 1739.4 322.1 1742.3 326.9 1744.95 331.9 1747.45 337.35 1748.7 340.25 1749.85 343.25 1751 346.3 1751.1 346.55 1744.3 346.55 1741.35 336.5 1740.45 333.8 1739.5 331.25 1736.25 323.75 1733.45 318.65 1733.4 318.55 1732.35 316.95 1730.45 314.2 1728.75 312.1 1728.05 311.3 1727.95 311.2 1727.6 310.8 1727.55 310.75 1726.7 309.85 1726.65 309.8 1726.25 309.45"
        />
        <path
          stroke="none"
          fill="url(#gradient38)"
          d="M1786.6 316.45 L1792.3 292.4 1793.15 294.9 1795.3 301.95 1798.05 312.45 1800.15 305.25 1801.9 300.65 1805.35 293.05 1807 290 1807.35 289.35 1809.7 285.55 1811.35 283.2 1813.05 281 1815.95 277.85 1818.55 275.55 1820.4 274.15 1822.5 272.8 1825.65 271.25 1827.5 270.55 1829.05 270.1 1829.15 270.1 1829.6 270 1832.15 269.55 1832.25 269.55 1832.3 269.55 1833.5 269.45 1833.7 269.45 1835.35 269.45 1835.75 269.55 1835.9 269.95 1835.8 270.35 1835.45 270.6 1832.6 271.15 1832.5 271.15 1832.45 271.2 1830.3 271.85 1830.25 271.9 1828.35 272.7 1825.3 274.5 1822.85 276.4 1822.5 276.75 1821 278.2 1820.7 278.5 1818.3 281.45 1816.75 283.7 1815.45 285.9 1814.2 288.2 1811.55 294.2 1809.05 301.5 1808.2 304.45 1807.1 308.6 1803.7 326.45 1798.8 346.55 1789.85 346.55 1790.15 344.35 1791.05 339.85 1788.55 328.25 1786.6 316.45 M1807.25 345.45 L1808.3 343.6 1809.05 342.45 1809.75 341.35 1811.35 339.25 1813 337.4 1814.7 335.8 1816.5 334.5 Q1817.35 333.95 1818.35 333.5 L1818.85 333.3 1818.95 333.3 1819.3 333.15 1820.2 332.85 1821.95 332.55 1822.75 332.5 1824.15 332.5 1824.25 332.5 1824.9 332.6 1826.05 332.8 1828.2 333.5 1828.3 333.55 1828.6 333.7 1828.9 333.95 1828.9 334.4 1828.65 334.75 1828.2 334.8 1828.1 334.75 1827.95 334.75 1827.95 334.7 1827.9 334.7 1827.3 334.55 1825.8 334.35 1824.75 334.3 1824.1 334.3 1824.05 334.3 1823.9 334.3 1822.3 334.6 1820.95 335.05 1820.25 335.4 1819.55 335.8 Q1818.8 336.25 1818.15 336.8 L1816.8 338.05 1815.5 339.6 1814.25 341.4 1813.15 343.4 1812.6 344.45 1812.05 345.55 1811.65 346.55 1807 346.55 1807.25 345.45"
        />
        <path
          stroke="none"
          fill="url(#gradient39)"
          d="M1747.9 273.65 L1757.3 282.55 1762.55 299.75 1767.75 319.7 1769.55 328.1 1770.95 340.55 1770.95 340.5 Q1771.45 333.45 1772.55 327.3 L1772.9 325.5 1772.95 325.35 1773.65 322.6 Q1777.5 336.05 1775.7 346.55 L1763.65 346.55 1756.8 324 1756.55 322.05 1756.25 318.95 1755.9 315.85 1753.5 300.15 1750.35 284.15 1747.9 273.65"
        />
        <path
          stroke="none"
          fill="url(#gradient40)"
          d="M1898.9 278.8 L1900.3 275 1903.2 268.4 1904.75 265.3 1906.35 262.25 1909.75 256.6 1911.5 254 1915.2 249.3 1916.85 247.45 1919 245.25 1920.9 243.55 1921.4 243.15 1921.5 243.05 1922.1 242.55 1922.15 242.5 1924.05 241.05 1926 239.8 1929.3 237.95 1929.65 237.75 1932.4 236.55 1936.2 235.35 1936.6 235.4 1936.9 235.7 1936.9 236.15 1936.6 236.45 1933.1 238.1 1930.7 239.55 Q1929.2 240.5 1927.85 241.6 L1925.8 243.4 1923.25 245.95 1921.65 247.75 1918.6 251.85 Q1917.05 254.15 1915.65 256.65 L1914.25 259.25 1911.65 264.85 1910.4 267.85 1909.25 270.95 1906.65 279.05 1903.65 291.1 1903.3 292.6 1898.9 278.8 M1920.25 333.85 L1921.9 328.25 1923.65 323.1 1926.6 316.05 1928.05 313.25 1931.15 308 1932.85 305.65 1934.65 303.45 1936.5 301.4 1938.45 299.65 Q1939.4 298.8 1940.45 298.1 1941.45 297.35 1942.45 296.75 L1944.4 295.7 1946.7 294.7 1949.1 293.95 1951.15 293.55 1951.2 293.55 1951.25 293.5 1951.55 293.5 1954.25 293.2 1954.45 293.2 1954.55 293.2 1956.05 293.2 1956.25 293.2 1957.9 293.3 Q1958.1 293.3 1958.25 293.45 L1958.45 293.85 1958.3 294.25 1957.9 294.45 1957.25 294.5 1957.2 294.5 1957.2 294.55 1957.15 294.55 1956.65 294.6 1956.6 294.6 1954.45 294.9 1952 295.5 1950.05 296.2 1947.3 297.5 1945.9 298.35 1944.3 299.55 1942.7 300.9 1941.15 302.5 1939.65 304.25 1938.25 306.2 1936.9 308.35 1935.65 310.65 1933.4 315.7 1932.4 318.4 1929.45 329 1927.55 339.65 1927.15 342.9 1918.3 342.9 1920.25 333.85 M1899.2 321.4 L1898.85 324.6 1901 333.85 1901.5 336.55 1902.6 342.9 1890 342.9 1887.1 323.35 1888.6 316.5 1888.35 315.25 1888.3 315.15 1888 313.95 1887.05 310.8 1884.9 304.75 1883.65 301.9 1882.35 299.2 Q1880.95 296.55 1879.35 294.25 L1878.2 292.7 1874.55 283.8 1876.35 284.95 1878.25 286.45 1878.35 286.5 1878.4 286.55 1878.95 287 1883.2 291.25 1887.1 296.3 1889.15 299.55 1890.55 302.1 1891.45 303.9 1892.35 299.9 1893.3 296.25 1894.05 293.6 1899.2 321.4 M1870.7 285.4 L1870.6 285.35 1867.85 283.65 1865.85 282.7 1862.3 281.35 1862 281.25 1859.35 280.55 1857.35 280.2 1857.25 280.2 1857.2 280.2 1857.15 280.15 1856.45 280.05 1856.4 280.05 1855.6 279.95 1855.25 279.8 1855.1 279.4 Q1855.1 279.15 1855.25 279 L1855.7 278.8 1856.1 278.8 1856.35 278.8 1858.1 278.8 1858.15 278.8 1859.6 278.9 1862.5 279.2 1865.8 279.95 1869.05 281 1869.3 281.1 1870.7 285.4"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1870.7 285.4 L1869.3 281.1 1868.6 279.15 1866.45 274 1864.75 270.65 1863.45 268.3 1861.45 265.3 1861.35 264.9 Q1861.35 264.65 1861.5 264.5 1861.7 264.35 1861.95 264.35 L1862.35 264.5 1862.65 264.85 1862.75 264.9 1864.85 267.3 1866.55 269.5 1869.5 274 1872.7 279.9 1874.55 283.8 1878.2 292.7 1879.6 296.6 1883 307.3 1885.35 315.85 1887.1 323.35 1890 342.9 1880.7 342.9 1878.4 322 1876.8 312.1 1876.25 308.9 1875.05 302.65 1872.9 293.2 1871.5 288.05 1870.7 285.4 M1898.9 278.8 L1903.3 292.6 1907.7 306.4 1909.65 313.25 1910.75 317.45 1911.65 321.65 1912.3 326.25 1914.6 317.9 1915.6 314.8 1918.85 305.8 1920.05 302.95 1921.3 300.2 1922.85 297 1925.4 292.5 1926.85 290.15 1929.7 286.1 1929.9 285.85 1930.3 285.35 1930.7 284.9 1931.05 284.45 1931.1 284.4 1931.5 283.95 1933.05 282.2 1933.45 281.8 1933.5 281.75 1933.95 281.3 1937.4 278.25 1937.8 277.95 1938.9 277.1 1942.05 275.15 Q1943.25 274.5 1944.4 274 L1947.15 273 1947.7 272.85 1948.1 272.85 1948.4 273.15 1948.4 273.6 1948.1 273.95 1945.2 275.55 1943.15 276.9 Q1942 277.8 1940.85 278.85 L1938.25 281.5 1935.85 284.5 1934.6 286.35 1931.75 291.3 1931.7 291.45 1931.1 292.55 1930.05 294.9 1927.1 302.55 1926.2 305.25 1925.4 308.05 1924.6 310.95 1923.4 316.1 1922.25 321.45 1920.25 333.85 1918.3 342.9 1904.35 342.9 1901.45 332 1901.1 330.45 1899.2 321.4 1894.05 293.6 1891.05 281.15 1889.2 274.45 1885.25 261.7 1884.25 258.75 1880.95 250.35 1879.85 247.75 1876.2 240.35 1871.9 233.45 1869.9 230.7 1867.65 228 1865.5 225.85 1865.35 225.5 1865.45 225.1 Q1865.6 224.9 1865.85 224.85 L1866.3 224.95 1867.3 225.7 1867.35 225.75 1868.75 226.85 1873.6 231.5 1878.05 236.85 1879.5 238.85 1882.4 243.25 1885.35 248.15 1886.8 250.8 1888.25 253.6 1889.65 256.45 1891.05 259.4 1893.8 265.55 1897.65 275.35 1898.9 278.7 1898.9 278.8 M1945.3 342.9 L1939.75 342.9 1942 336.65 1944.9 329.5 1947.1 324.9 1948.6 322.05 1952.35 315.85 1953.25 314.5 1954.95 312.3 1957.05 309.9 1957.15 309.8 1957.45 309.5 1957.8 309.35 1958.2 309.45 1958.45 309.8 1958.35 310.25 1956.35 313.3 1955.05 315.6 1951.8 322.65 1951.2 324.15 1950.45 326.3 1949.65 328.6 1948.3 333.05 1947.3 336.85 1947.4 336.6 1945.3 342.9 M1849.3 290.85 L1849.1 290.5 1849.2 290.1 Q1849.3 289.9 1849.55 289.85 L1850 289.9 1853.1 292.15 1855.2 294 1858.05 296.75 1860.45 299.5 1861.85 301.3 1862.55 302.2 1862.55 302.25 1863.3 303.25 1866.15 307.6 1867.55 310 1868.95 312.5 1871.65 317.9 1874.15 323.75 1875.95 328.4 1880.5 342.9 1872.15 342.9 1870.6 335.15 1869.85 331.95 1869.1 328.85 1868.25 325.8 1865.5 317.2 1864.5 314.55 1863.45 312 1862.95 310.8 1862.65 310.2 1861.6 307.85 1859.1 303.15 1856.3 298.8 1853.7 295.4 1851.9 293.4 1849.3 290.85"
        />
        <path
          stroke="none"
          fill="url(#gradient41)"
          d="M1945.3 342.9 L1947.4 336.6 1948.8 334.35 1950.25 332.3 1951.8 330.45 Q1953.35 328.7 1954.95 327.45 1955.7 326.85 1956.6 326.35 L1957.45 325.9 Q1957.9 325.65 1958.25 325.55 L1959.8 325 1961.3 324.75 1961.35 324.75 1961.7 324.7 1963.45 324.75 1965 325 1965.05 325 1965.1 325 1965.25 325.05 1965.6 325.3 1965.7 325.7 1965.5 326.1 1965.05 326.2 1964.85 326.2 1964.8 326.2 1964.6 326.15 1964.4 326.15 1964.25 326.15 1964.2 326.15 1963.6 326.15 1962.3 326.25 1961.5 326.45 Q1960.3 326.75 1959.15 327.4 L1957.9 328.25 1957.25 328.8 1956.6 329.35 Q1955.35 330.6 1954.2 332.35 L1953.05 334.15 1951.95 336.2 1950.95 338.4 1949.95 340.8 1949.2 342.9 1945.3 342.9 M1847 316.7 L1846.6 316.6 1846.35 316.3 1846.45 315.85 Q1846.55 315.6 1846.8 315.55 L1846.95 315.5 1847 315.5 1847.05 315.5 1849.45 315.2 1850.5 315.2 1850.7 315.25 1850.75 315.25 1852.25 315.5 1853.8 316.05 1854.6 316.4 1855.45 316.85 1857.1 317.95 1860.25 320.95 1861.8 322.8 1863.25 324.85 1864.65 327.1 1865.95 329.5 1868.45 334.8 1870.75 340.5 1871.6 342.9 1865.6 342.9 1865.4 342.15 1863.85 336.45 1862.1 331.3 1861.1 328.9 1860.1 326.7 1859 324.65 1857.85 322.85 1855.45 319.85 1854.8 319.3 1854.15 318.75 1852.9 317.9 Q1851.75 317.25 1850.55 316.95 L1849.9 316.8 1848.45 316.65 1847.85 316.65 1847.8 316.65 1847.65 316.65 1847.45 316.65 1847.25 316.7 1847.2 316.7 1847 316.7"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M2085.15 338.1 L2081.5 338.1 Q2084.5 322.35 2090.75 311.85 L2094.1 313.8 Q2087.75 324.95 2085.15 338.1 M2027.5 242.1 L2032.1 240.8 Q2036.15 255.55 2038.4 271.55 2039 249.75 2041.5 229.65 L2046 230.2 Q2037.75 283.55 2045.5 338.1 L2040.75 338.1 2040.65 337.25 2040.6 338.1 2037.45 338.1 Q2040.25 288.55 2027.5 242.1 M2009.95 242 Q2001.7 289.2 2008.8 338.1 L2002.2 338.1 Q2000.35 311.8 1991.25 287.9 L1995.8 286.4 Q1999.45 297.5 2002 309.35 1999.6 275.05 2005.1 241.25 L2009.95 242 M2017.05 262.8 L2021.7 261.9 Q2028.55 297.85 2028.3 338.1 L2024.5 338.1 Q2024.6 299.2 2017.05 262.8 M2055.6 338.1 L2051.2 338.1 Q2048.35 285.95 2059.85 244.05 L2063.3 245 Q2053.3 288.15 2055.6 338.1 M2068.35 267.1 L2072.4 266.45 Q2075.1 283.15 2075.9 300 2077.35 293.3 2079.1 286.8 L2083.8 288.1 Q2076.8 311 2076.05 338.1 L2071.85 338.1 Q2074.1 303.8 2068.35 267.1 M1992.7 338.1 Q1991.7 314.25 1979.1 302.1 L1981.65 299.15 Q1993.85 309.15 1997.25 338.1 L1992.7 338.1 M1974.4 324.2 L1976.65 321.65 Q1983.25 327.1 1987.3 338.1 L1984.55 338.1 Q1981.3 330.25 1974.4 324.2"
        />
        <path
          stroke="none"
          fill="url(#gradient42)"
          d="M2009.95 242 L2012.9 242.5 Q2005.2 289.85 2013.4 338.1 L2008.8 338.1 Q2001.7 289.2 2009.95 242"
        />
        <path
          stroke="none"
          fill="url(#gradient43)"
          d="M2017.05 262.8 Q2024.6 299.2 2024.5 338.1 L2020.4 338.1 Q2020.65 298.6 2013.95 263.35 L2017.05 262.8"
        />
        <path
          stroke="none"
          fill="url(#gradient44)"
          d="M2027.5 242.1 Q2040.25 288.55 2037.45 338.1 L2032.7 338.1 Q2036.05 285.15 2024.5 242.9 L2027.5 242.1"
        />
        <path
          stroke="none"
          fill="url(#gradient45)"
          d="M2045.5 338.1 Q2037.75 283.55 2046 230.2 L2049.3 230.6 Q2043.3 279.35 2048.65 338.1 L2045.5 338.1"
        />
        <path
          stroke="none"
          fill="url(#gradient46)"
          d="M2055.6 338.1 Q2053.3 288.15 2063.3 245 L2067.45 246.15 Q2056.3 287.1 2059.1 338.1 L2055.6 338.1"
        />
        <path
          stroke="none"
          fill="url(#gradient47)"
          d="M2068.35 267.1 Q2074.1 303.8 2071.85 338.1 L2067.3 338.1 Q2070.25 302.65 2064.6 267.7 L2068.35 267.1"
        />
        <path
          stroke="none"
          fill="url(#gradient48)"
          d="M2002.2 338.1 L1998.4 338.1 Q1995.85 311.9 1988.3 288.85 L1991.25 287.9 Q2000.35 311.8 2002.2 338.1"
        />
        <path
          stroke="none"
          fill="url(#gradient49)"
          d="M1992.7 338.1 L1989.35 338.1 Q1986.3 313.95 1976.5 305.1 L1979.1 302.1 Q1991.7 314.25 1992.7 338.1"
        />
        <path
          stroke="none"
          fill="url(#gradient50)"
          d="M1974.4 324.2 Q1981.3 330.25 1984.55 338.1 L1978.7 338.1 Q1975.7 331.45 1971.5 327.6 L1974.4 324.2"
        />
        <path
          stroke="none"
          fill="url(#gradient51)"
          d="M2076.05 338.1 Q2076.8 311 2083.8 288.1 L2086.7 288.9 Q2080.45 311.9 2078.55 338.1 L2076.05 338.1"
        />
        <path
          stroke="none"
          fill="url(#gradient52)"
          d="M2085.15 338.1 Q2087.75 324.95 2094.1 313.8 L2097.55 315.85 Q2092.35 324.9 2089.6 338.1 L2085.15 338.1"
        />
        <path
          stroke="none"
          fill="url(#gradient53)"
          d="M2131.35 227.3 L2136.45 223 Q2159.2 249.6 2164.3 304 2171.15 277.75 2183.2 266.75 L2187.65 271.4 Q2164.6 299.25 2163.75 344.75 L2158.35 344.75 Q2162.5 263.9 2131.35 227.3"
        />
        <path
          stroke="none"
          fill="url(#gradient54)"
          d="M2150.85 344.75 L2145.7 344.75 Q2141.15 294 2120.65 269 L2125.9 264.6 Q2148.45 298.25 2150.85 344.75"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M2150.85 344.75 Q2148.45 298.25 2125.9 264.6 L2130.2 261 Q2144.5 277.7 2151.85 305.35 2147.1 255.65 2126.9 231.05 L2131.35 227.3 Q2162.5 263.9 2158.35 344.75 L2150.85 344.75 M2163.75 344.75 Q2164.6 299.25 2187.65 271.4 L2191.85 275.8 Q2175.35 292.3 2170.1 344.75 L2163.75 344.75 M2139.1 344.75 Q2132.8 317.3 2116.15 295.05 L2120.95 291 Q2137.6 310.45 2144.8 344.75 L2139.1 344.75 M2110 318.25 L2116.1 315.9 Q2121.2 328.7 2122.25 344.75 L2116.6 344.75 Q2115.7 331.45 2110 318.25 M2191.5 296.45 L2197.2 298.65 Q2190.15 317.35 2192.2 343.5 2198.7 323.05 2208.95 313.6 L2213.15 318 Q2203.2 329.4 2197.9 344.75 L2186.35 344.75 Q2183.15 319.35 2191.5 296.45"
        />
        <path
          stroke="none"
          fill="url(#gradient55)"
          d="M2139.1 344.75 L2131.9 344.75 Q2125.3 315.95 2111.4 299 L2116.15 295.05 Q2132.8 317.3 2139.1 344.75"
        />
        <path
          stroke="none"
          fill="url(#gradient56)"
          d="M2110 318.25 Q2115.7 331.45 2116.6 344.75 L2109.5 344.75 Q2108.5 331.3 2104.45 320.35 L2110 318.25"
        />
        <path
          stroke="none"
          fill="url(#gradient57)"
          d="M2197.9 344.75 Q2203.2 329.4 2213.15 318 L2217.6 322.65 Q2210.15 330.05 2205 344.75 L2197.9 344.75"
        />
        <path
          stroke="none"
          fill="url(#gradient58)"
          d="M2191.5 296.45 Q2183.15 319.35 2186.35 344.75 L2179.7 344.75 Q2177.3 315.2 2185.55 294.15 L2191.5 296.45"
        />
        <path
          stroke="none"
          fill="url(#gradient59)"
          d="M249.5 457.75 L249.55 471.4 235.4 471.4 234.45 438.75 234.35 433.95 233.8 382.75 233.85 379.3 233.95 368.6 234.5 353.4 234.5 353.35 236 358.4 236.5 360.15 239.15 370.85 240.85 378.6 241.5 382 243.7 394.2 245.35 405.65 247 419.65 248.1 432.05 248.55 438.1 Q249.2 447.95 249.5 457.75 M212.95 467.2 L213.05 471.4 198.5 471.4 198.4 467.6 197.9 424.55 198.45 393.8 198.6 390.4 198.7 387.2 200.25 365.1 203.9 380.95 205.6 389.95 206.2 393.3 208.9 412.25 210.35 425.05 211.35 436.35 212.2 449.25 212.95 467.2 M282.65 465.65 L282.55 471.4 268.7 471.4 271.7 439.25 271.95 437.15 273.75 424.4 276.75 407.3 280.5 391.1 281.85 411.35 281.9 412.1 282.6 437.25 282.65 465.65"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M300.3 467.1 L300.2 471.4 285.7 471.4 285.8 466.75 286.1 457.1 287.75 428.95 288.1 424.45 290.85 399.7 291.85 392.5 292.35 389.15 294.35 377.5 295.3 372.85 296.8 365.75 296.85 365.65 297.25 364.1 297.45 365.65 297.5 365.8 298.6 377.7 300.05 403.95 300.2 407.95 300.65 432.8 300.3 467.1 M265.75 468.1 L265.75 471.4 251.25 471.4 251.25 468.1 251.3 458.35 251.45 448.65 251.7 439.15 252.05 429.85 Q252.4 421.3 253.05 412.2 253.55 404.15 254.3 396.45 L256.05 380.2 258.5 363.85 258.55 363.85 260.9 379.55 262.7 396.45 263.95 412.2 264.95 429.85 265.3 439.15 265.55 448.65 265.7 458.35 265.75 468.1 M195.45 452.4 L196.7 471.4 182.75 471.4 182.4 455.35 182.4 450.75 182.4 413.85 182.4 410.4 182.6 400.45 183.2 384.6 183.25 384.6 186.6 396.75 188.8 406.55 191.55 421.4 194.05 438.75 195.45 452.4 M229.05 471.4 L214.75 471.4 215.05 464.2 216.85 442.65 218.15 431.9 218.95 425.95 219.6 421.75 220.25 417.7 223.1 402.6 226.5 388.1 226.55 387.8 228.35 381.35 229.5 377.6 230 403.7 230 410.85 229.95 418.55 229.9 422.6 229.05 471.4"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M326.9 441.1 L326.2 440.5 326.2 440.45 328.35 441.2 332.9 443.15 333 443.2 333.05 443.2 338.2 446.2 339.4 447.05 343.8 450.45 344.95 451.5 346.4 452.9 350.45 457.3 351.9 459.1 353.5 461.25 357.85 469.75 353.8 469.75 Q344.2 451.05 326.9 441.1 M342.8 374.05 L342.55 373.25 342.55 373.2 342.6 373.25 346.65 378.95 350.55 385.2 356.75 396.55 359.95 403.2 366.35 419.4 366.8 420.8 Q369.45 428.55 371.5 437.1 L372.9 427.5 377.15 409.05 379.05 402.9 382.3 394 386.7 384.1 390.85 376.25 395.8 368.35 397.4 366.05 401.15 361.1 405.55 356.1 Q380.3 403 375.55 469.75 L369.5 469.75 Q365.55 417 342.8 374.05 M384.65 451.45 L385.25 450.25 387.15 446.75 389.85 442.3 393.5 437 396.6 433.05 402.8 426.4 403.25 425.95 405.05 424.3 406.75 422.85 407.55 422.2 409 421.05 413.85 417.7 413.85 417.75 411.7 420.95 Q393.1 441.3 385.4 469.75 L377.65 469.75 Q380.35 460 384.65 451.45 M391.6 465.25 L392 464.8 395.25 461.8 398.45 459.3 398.65 459.15 401.5 457.3 402.7 456.6 405.6 455.2 405.6 455.25 405.35 455.55 Q397.6 461.1 392.85 469.75 L388.5 469.75 391.6 465.25 M357.95 433.2 Q364.85 449.8 367.7 469.75 L359.75 469.75 Q349.85 412.6 328.4 398.4 L327.95 397.75 327.95 397.7 331.2 399.9 334.25 402.25 335.05 402.9 336.75 404.3 339.7 407.1 341.4 408.8 345.2 413.05 349.85 419.15 351.95 422.3 354.65 426.75 356.55 430.3 357.5 432.1 357.95 433.2"
        />
        <path
          stroke="none"
          fill="url(#gradient60)"
          d="M375.55 469.75 Q380.3 403 405.55 356.1 L406.6 354.95 406.6 355 400.55 369.65 396.8 380.2 396.8 380.3 393.9 389.95 392.9 393.7 389.5 409.1 386.55 428.35 384.9 446.35 384.65 451.45 Q380.35 460 377.65 469.75 L375.55 469.75"
        />
        <path
          stroke="none"
          fill="url(#gradient61)"
          d="M411.7 420.95 L407.35 427.35 401.6 437.7 398.55 444.3 Q395.75 450.9 393.6 457.95 L391.6 465.25 388.5 469.75 385.4 469.75 Q393.1 441.3 411.7 420.95"
        />
        <path
          stroke="none"
          fill="url(#gradient62)"
          d="M405.35 455.55 L403.9 457.2 403.8 457.3 402.1 459.4 398.95 463.8 397.5 466.1 395.55 469.75 392.85 469.75 Q397.6 461.1 405.35 455.55"
        />
        <path
          stroke="none"
          fill="url(#gradient63)"
          d="M342.8 374.05 Q365.55 417 369.5 469.75 L367.7 469.75 Q364.85 449.8 357.95 433.2 L357.2 428.5 357.15 428.35 356.45 424.75 352.5 407.2 351.55 403.45 346.05 384.35 343.15 375.15 343.1 375 342.8 374.05"
        />
        <path
          stroke="none"
          fill="url(#gradient64)"
          d="M328.4 398.4 Q349.85 412.6 359.75 469.75 L357.85 469.75 353.5 461.25 352.65 456.2 350.5 446.3 348.2 437.95 Q346.05 430.9 343.25 424.35 L341.9 421.3 338.1 413.65 333.35 405.6 328.4 398.4"
        />
        <path
          stroke="none"
          fill="url(#gradient65)"
          d="M326.9 441.1 Q344.2 451.05 353.8 469.75 L347.55 469.75 345.9 465.95 345.85 465.85 344.8 463.6 341.95 458.45 338.75 453.65 336.2 450.35 333.7 447.5 333.6 447.4 331.55 445.3 331.5 445.25 330.85 444.65 330.85 444.6 326.9 441.1"
        />
        <path
          stroke="none"
          fill="url(#gradient66)"
          d="M472.85 424.75 L472.9 424.45 473.15 424.3 473.45 424.3 473.65 424.5 474.1 425.85 475.4 429.55 477.35 435.35 479.75 442.9 482.4 451.9 483.05 454.3 482.7 444 481.3 417.65 478.5 382.6 478.55 382.3 Q478.65 382.15 478.8 382.1 L479.1 382.15 479.25 382.45 479.6 384.05 480.45 388.55 481.75 395.55 483.25 404.7 484.95 415.6 487.9 439.3 488.85 430.8 489.65 424.05 490.25 419.45 493.3 398.8 495.2 387.9 496.9 378.8 498.35 371.75 499.3 367.25 499.65 365.65 499.8 365.4 500.1 365.3 500.35 365.5 500.45 365.8 498.5 383.55 495.05 426.35 494.35 438.2 494.2 441.6 493.95 451.7 493.6 464.8 493 473.85 482.4 473.85 479.45 456.5 472.85 424.75 M524.2 467.4 L538.35 431.8 538.95 430.25 540.2 427.1 544.3 416.45 547.95 407.8 551.15 400.55 553.75 395 555.45 391.45 556 390.2 556.25 390 556.5 390 556.75 390.2 556.75 390.5 551.9 404.85 542.75 435 538.8 449.5 538.1 452.25 536.15 460.65 533.6 471.5 533 473.85 525.15 473.85 524.2 467.4 M518.25 473.85 L511.7 473.85 511.7 473.75 512.2 470.95 513.6 461.7 515.5 447.75 518.25 473.85 M518.5 421.6 L519.7 409.75 519.8 409.5 520.05 409.4 520.35 409.5 520.5 409.75 520.5 411.15 520.6 415.05 520.7 421.2 520.7 429.1 520.55 438.15 518.5 421.6 M521.9 451.75 L523.75 446.55 525.1 442.85 531.5 426.25 535.15 417.6 538.35 410.35 540.9 404.8 542.6 401.25 543.2 400 543.4 399.8 543.7 399.8 543.9 400 543.95 400.3 539.1 414.65 528.6 449.55 526 459.3 525.3 462.1 524.15 467 521.9 451.75 M459.75 411.6 L459.85 411.35 460.15 411.25 460.4 411.4 460.55 411.65 460.3 426.8 460.9 463.25 461.35 473.3 461.4 473.85 455.05 473.85 455.15 467.65 455.35 461.85 455.5 457.95 456.6 440.2 457.4 430.8 458.25 422.95 459.05 416.85 459.55 412.95 459.75 411.6"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M510.3 351.2 L510.45 350.95 510.75 350.85 511 351.05 511.1 351.4 509.15 369.15 506.05 406.1 505 423.75 504.85 427.15 504.6 437.3 504.25 450.4 503.95 455.05 502.3 473.85 496.1 473.85 495.85 469.35 496 449.9 496.5 443.4 497.2 436.75 499.5 416.35 500.3 409.6 500.85 405.45 503.95 384.35 505.85 373.5 507.55 364.35 509 357.3 509.95 352.8 510.3 351.2 M524.2 467.4 L525.15 473.85 518.25 473.85 515.5 447.75 514.25 420.65 511.25 382.6 511.3 382.3 511.55 382.1 511.85 382.15 512 382.45 512.35 384.05 513.2 388.55 514.5 395.55 516 404.7 517.7 415.6 518.5 421.6 520.55 438.15 520.55 438.2 520.85 440.85 521.5 447.6 521.9 451.75 524.15 467 523.85 468.2 523.9 468.2 524.2 467.4 M468.95 398.35 L469.1 398.1 Q469.2 398 469.35 398 L469.65 398.15 469.75 398.4 469.5 413.6 469.95 445.1 470.6 460.1 470.75 462.95 471.45 471.55 471.65 473.85 464 473.85 464.05 471.8 464.4 454.4 464.55 448.6 464.7 445.05 465.8 426.95 466.65 417.6 467.5 409.7 468.25 403.65 468.75 399.75 468.95 398.35 M551.75 416.5 L551.85 416.25 552.1 416.15 552.4 416.25 552.55 416.55 552.55 417.95 552.65 421.85 552.75 428 552.75 435.9 552.55 445.3 551.95 459.9 551.45 466.95 551 472.75 550.9 473.85 544.8 473.85 548.35 448.8 551.75 416.5 M440.3 428 Q440.25 427.85 440.35 427.75 L440.55 427.55 440.85 427.6 441.05 427.8 441.5 429.1 442.8 432.8 444.75 438.6 447.15 446.2 449.85 455.2 454.75 473.85 449.35 473.85 446.45 457.3 440.3 428"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M676.45 407.85 Q651.6 434.15 635.85 470.45 L632.65 470.45 Q630.1 415.25 648.7 375.9 L650.15 373.65 Q637.55 412.3 636.1 442.8 646.9 423.2 659.95 410 649.6 428.9 642.7 446.1 658.9 421.05 677.4 406.55 L676.45 407.85 M607.1 373.55 Q615.05 389.95 619.1 411.4 622.85 377.55 634.75 354.25 L634.5 355.45 Q619.35 401.15 627.15 470.45 L620.45 470.45 Q618.1 417.4 607.1 373.55 M675.45 449.7 Q659.45 460 652.75 470.45 L642.65 470.45 Q657.2 457.5 675.45 449.7 M614.25 470.45 L602.55 470.45 Q596.6 446.1 577.7 424.8 L577.45 424.35 Q592.4 436.25 604.35 457.1 602.2 428.9 590.6 395.8 L590.75 396 590.8 396.05 Q606.05 423.95 614.25 470.45"
        />
        <path
          stroke="none"
          fill="url(#gradient67)"
          d="M614.25 470.45 Q606.05 423.95 590.8 396.05 604.05 412.95 611.7 440.6 613.7 410.55 606.05 371.4 L607.1 373.55 Q618.1 417.4 620.45 470.45 L614.25 470.45"
        />
        <path
          stroke="none"
          fill="url(#gradient68)"
          d="M602.55 470.45 L586.7 470.45 Q579.5 465.5 571.35 460.7 580 462.5 588.7 466.05 580.95 454.6 570.85 442.95 585.45 451.2 598.6 466.35 591.1 446.35 577.7 424.8 596.6 446.1 602.55 470.45"
        />
        <path
          stroke="none"
          fill="url(#gradient69)"
          d="M634.5 355.45 Q627.1 393.65 629.05 423.15 636.35 395.2 648.7 375.9 630.1 415.25 632.65 470.45 L627.15 470.45 Q619.35 401.15 634.5 355.45"
        />
        <path
          stroke="none"
          fill="url(#gradient70)"
          d="M676.45 407.85 Q661.7 428.3 652.05 447.05 665.7 437.15 679.15 431.4 659.35 447.45 645 463.15 660.9 453.8 676.1 449.25 L675.45 449.7 Q657.2 457.5 642.65 470.45 L635.85 470.45 Q651.6 434.15 676.45 407.85"
        />
        <path
          stroke="none"
          fill="url(#gradient71)"
          d="M779.25 421.1 L775.25 415.1 786.75 398.15 Q779.9 420.2 779.25 421.1"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M779.25 421.1 Q785.2 419.35 793.75 421.1 L778.5 437.35 781.5 446.35 793 446.35 778.25 458.85 787.75 458.85 Q772.55 466.4 753.5 469.1 734.45 466.4 719.25 458.85 L728.75 458.85 714 446.35 725.5 446.35 728.5 437.35 713.25 421.1 Q721.85 419.35 727.75 421.1 L731.75 415.1 720.25 398.15 Q728.95 399 736.75 402.65 L742.25 393.6 733.5 373.65 Q739.9 376.65 747.1 384.75 L753.5 355.65 759.9 384.75 Q767.15 376.65 773.5 373.65 L764.75 393.6 770.25 402.65 Q778.05 399 786.75 398.15 L775.25 415.1 779.25 421.1"
        />
        <path
          stroke="none"
          fill="url(#gradient72)"
          d="M770.25 402.65 L764.75 393.6 773.5 373.65 Q772 398.95 770.25 402.65"
        />
        <path
          stroke="none"
          fill="url(#gradient73)"
          d="M720.25 398.15 L731.75 415.1 727.75 421.1 Q727.1 420.2 720.25 398.15"
        />
        <path
          stroke="none"
          fill="url(#gradient74)"
          d="M733.5 373.65 L742.25 393.6 736.75 402.65 Q735 398.95 733.5 373.65"
        />
        <path
          stroke="none"
          fill="url(#gradient75)"
          d="M713.25 421.1 L728.5 437.35 725.5 446.35 Q719.75 439.15 713.25 421.1"
        />
        <path
          stroke="none"
          fill="url(#gradient76)"
          d="M714 446.35 L728.75 458.85 Q719.95 455.5 714 446.35"
        />
        <path
          stroke="none"
          fill="url(#gradient77)"
          d="M719.25 458.85 Q734.45 466.4 753.5 469.1 L736.5 469.1 Q725 468.3 719.25 458.85"
        />
        <path
          stroke="none"
          fill="url(#gradient78)"
          d="M781.5 446.35 L778.5 437.35 793.75 421.1 Q787.3 439.15 781.5 446.35"
        />
        <path
          stroke="none"
          fill="url(#gradient79)"
          d="M753.5 469.1 Q772.55 466.4 787.75 458.85 782 468.3 770.5 469.1 L753.5 469.1"
        />
        <path
          stroke="none"
          fill="url(#gradient80)"
          d="M778.25 458.85 L793 446.35 Q787.05 455.5 778.25 458.85"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M881.75 388.4 Q879.5 387.65 877.7 384.35 873.1 385.75 870.9 383.55 868.7 381.35 870.1 376.75 865.85 374.5 865.85 371.35 865.85 368.25 870.1 366 868.7 361.4 870.9 359.2 873.1 357 877.7 358.35 880 354.1 883.1 354.1 886.2 354.1 888.45 358.4 893.05 357 895.3 359.2 897.45 361.4 896.1 366 900.3 368.25 900.3 371.35 900.3 374.45 896.1 376.75 897.45 381.35 895.3 383.55 893.05 385.75 888.45 384.35 886.6 387.85 884.1 388.5 L881.75 388.4 M913.85 405.3 L913 403.9 Q909.3 405 907.5 403.25 905.75 401.45 906.85 397.75 903.45 395.95 903.45 393.45 903.45 390.95 906.85 389.1 905.75 385.45 907.5 383.65 909.3 381.9 913 383 914.8 379.6 917.3 379.6 919.8 379.6 921.6 383 925.3 381.9 927.1 383.65 928.85 385.45 927.75 389.1 931.15 390.95 931.15 393.45 931.15 395.95 927.75 397.75 928.85 401.45 927.1 403.25 925.3 405 921.6 403.9 919.8 407.3 917.3 407.3 L916.35 407.15 913.85 405.3 M927.05 427.8 Q925.75 427.35 924.7 426.3 922.75 424.35 922.75 421.65 922.75 418.95 924.7 417.05 926.6 415.15 929.3 415.15 932 415.15 933.9 417.05 935.85 418.95 935.85 421.65 935.85 424.35 933.9 426.3 932 428.2 929.3 428.2 L928.5 428.15 927.05 427.8 M898.7 420.15 Q897 419.75 895.7 418.45 893.75 416.5 893.75 413.8 893.75 411.1 895.7 409.2 897.6 407.3 900.3 407.3 903 407.3 904.95 409.2 906.85 411.1 906.85 413.8 906.85 416.5 904.95 418.45 903 420.35 900.3 420.35 L898.7 420.15 M852.6 404.25 L852 404.25 Q848.3 404.25 845.7 401.65 843.1 399.1 843.1 395.4 843.1 391.7 845.7 389.1 848.3 386.5 852 386.5 855.65 386.5 858.25 389.1 860.85 391.7 860.85 395.4 860.85 399.1 858.25 401.65 856.9 403.05 855.2 403.7 L852.6 404.25 M839.9 437.3 Q838.85 438.1 837.65 438.1 835.15 438.1 833.3 434.7 829.6 435.85 827.85 434.05 826.05 432.3 827.2 428.6 823.8 426.8 823.8 424.25 823.8 421.75 827.2 419.95 826.05 416.25 827.85 414.5 829.6 412.7 833.3 413.85 835.15 410.45 837.65 410.45 840.1 410.45 841.95 413.85 845.65 412.7 847.4 414.5 849.2 416.25 848.1 419.95 851.45 421.75 851.45 424.25 851.45 426.75 848.1 428.6 849.2 432.3 847.4 434.05 845.65 435.85 841.95 434.7 L841.95 434.75 839.9 437.3 M828.25 451.35 L828.1 451.1 828.15 450.85 828.4 450.65 828.7 450.7 829 450.85 829.05 450.85 829.05 450.9 830 451.45 832.05 452.95 833.8 454.55 835.5 456.5 837.25 458.9 839 461.75 839.8 463.3 840.55 464.95 841.4 466.9 841.45 467 841.5 467.1 842.75 470.6 838.7 470.6 838.5 469.6 Q837.6 466.05 836.4 462.95 L835.15 460.1 833.85 457.7 832.5 455.65 831.2 454.05 831.05 453.85 828.6 451.6 828.55 451.55 828.5 451.5 828.25 451.35"
        />
        <path
          stroke="none"
          fill="url(#gradient81)"
          d="M916.35 407.15 L915.7 414.75 915.1 423.4 913.85 462.15 913.65 465.4 913.2 469.65 913.1 470.6 905.85 470.6 905.6 462.8 906.25 454.5 909.45 429.8 912.75 410.3 913.85 405.3 916.35 407.15"
        />
        <path
          stroke="none"
          fill="url(#gradient82)"
          d="M884.1 388.5 L883.35 402.95 883.25 417.05 883.6 415.55 884.25 413.55 884.9 411.55 886.5 407.35 888.7 402.65 889.55 401.15 891.3 398.35 893.1 396 894.9 394.05 896.95 392.3 897.05 392.25 897.15 392.15 898.65 391.15 898.7 391.1 899.75 390.55 899.75 390.5 899.8 390.5 900.1 390.35 900.4 390.3 900.6 390.45 900.7 390.75 900.5 391 900.3 391.15 900.25 391.25 900.2 391.25 900.15 391.25 899.35 391.9 897.5 393.65 896.2 395.2 894.75 397.2 893.4 399.6 892.1 402.4 Q890.8 405.4 889.85 409 L889.35 410.85 888.15 416.65 886.75 427.1 886.55 429.25 886.25 433.6 886.05 440.15 886.1 451.25 884.9 466.95 884.9 469.35 884.85 470.6 878.3 470.6 878.25 470.35 876.55 454.4 876.5 448.7 877.35 427.65 877.7 422.4 878.35 414.05 881.75 388.4 884.1 388.5"
        />
        <path
          stroke="none"
          fill="url(#gradient83)"
          d="M900.3 420.35 L900.2 421.25 898.7 438.25 898.15 446.9 897.2 466.3 897.15 470.6 890.35 470.6 894.25 442 898.7 420.15 900.3 420.35"
        />
        <path
          stroke="none"
          fill="url(#gradient84)"
          d="M928.5 428.15 L928.4 429.05 926.9 446.1 926.35 454.75 926.25 457.1 928.25 452.8 929.1 451.3 930.9 448.5 932.7 446.15 934.5 444.2 935.1 443.6 935.25 443.5 935.85 443 935.95 442.9 936.55 442.45 936.65 442.4 936.75 442.3 938.2 441.3 938.25 441.25 939.3 440.7 939.35 440.65 939.7 440.5 939.95 440.45 940.2 440.6 940.25 440.9 940.1 441.15 939.85 441.35 939.8 441.4 939.75 441.4 937.15 443.7 937.1 443.8 935.75 445.35 934.35 447.35 932.95 449.75 931.65 452.55 Q930.4 455.55 929.4 459.15 L928.95 461 927.4 468.8 927.15 470.6 919.45 470.6 920 466.15 921.7 454.2 924.85 437.05 927.05 427.8 928.5 428.15"
        />
        <path
          stroke="none"
          fill="url(#gradient85)"
          d="M855.2 403.7 L858.65 417.5 861.5 432.6 864.95 455.7 865.4 460.3 865.65 469.1 865.6 470.6 858.15 470.6 858 469.55 857.25 461.7 856 433.6 854.15 414.45 852.6 404.25 855.2 403.7"
        />
        <path
          stroke="none"
          fill="url(#gradient86)"
          d="M841.95 434.75 L842.45 436.5 846.45 453.4 849.25 470.6 843.4 470.6 843.2 466.35 842.6 459.45 840.85 443.35 839.9 437.3 841.95 434.75"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M993.55 381.85 Q987.15 379.65 986.35 374.05 L985.7 351.3 994.45 367.55 998.25 360.55 997.8 375.5 Q997.5 377.55 996.1 378.9 L995.15 380.4 993.55 381.85 M999.8 398.1 L1004.55 389.3 1004.1 404.3 Q1003.75 406.7 1001.85 408.15 L999.8 398.1 M1042.9 413.55 L1041 412.5 Q1039.2 409.7 1040.35 406.85 L1047.5 393.65 1047.05 408.6 Q1046.55 412.05 1042.9 413.55 M1023.7 456.9 L1025.35 467.5 Q1022.35 466.75 1021.2 464.05 L1016.9 449.7 1023.7 456.9 M957.75 447.2 Q954.65 446.15 954.3 443.45 L954 432.55 959.15 442.1 Q959.95 444.15 958.75 446.1 L958.75 446.15 957.75 447.2 M974.25 461.65 L977.55 455.5 977.2 467.15 Q976.95 469 975.5 470.1 L974.25 461.65 M951.3 455.15 Q954.45 464 956.75 473.45 L954.25 473.45 Q953.05 464.25 951.3 455.15 M1069.75 457.65 Q1068.25 465.5 1067.15 473.45 L1064.9 473.45 Q1067 465.35 1069.75 457.65 M1065.35 446.35 L1057.8 473.45 1049.4 473.45 Q1055.9 458.7 1065.35 446.35"
        />
        <path
          stroke="none"
          fill="url(#gradient87)"
          d="M1041 412.5 L1042.9 413.55 Q1039.75 435.75 1039.8 458.9 1049.3 442.55 1062.2 430 L1042.85 473.45 1026.3 473.45 1025.35 467.5 1023.7 456.9 1017.85 420.1 Q1029.35 439.4 1034.2 463 1034.8 435.8 1041 412.5"
        />
        <path
          stroke="none"
          fill="url(#gradient88)"
          d="M995.15 380.4 Q997.8 389.05 999.8 398.1 L1001.85 408.15 1003.75 419.7 Q1007.5 410.4 1012.55 402 L1006.15 442.35 Q1007.2 457.45 1006.9 473.45 L986.9 473.45 978.65 421.45 Q991.3 442.75 992.9 471.15 993.9 451.55 998.7 434.45 997.65 407.65 993.55 381.85 L995.15 380.4"
        />
        <path
          stroke="none"
          fill="url(#gradient89)"
          d="M957.75 447.2 L958.75 446.15 Q965.65 455.65 970.85 466.55 969.5 447.95 966.05 430 971.4 444.95 974.25 461.65 L975.5 470.1 975.9 473.45 965.1 473.45 957.75 447.2"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1168.2 385.45 Q1166.95 384.8 1166.2 383.55 1165 381.65 1165.5 379.5 1165.7 378.55 1166.15 377.8 1165 377.15 1164.3 375.95 1163.1 374.1 1163.55 371.9 1164.05 369.75 1165.95 368.55 1165.6 367.75 1165.8 366.85 1166.05 365.75 1167 365.15 L1167.35 364.9 Q1166.7 363.4 1167.1 361.7 1167.55 359.65 1169.25 358.5 L1169.05 358.25 Q1168.45 357.25 1168.7 356.15 1168.95 355.05 1169.9 354.4 1170.9 353.8 1172 354.05 1172.5 354.15 1172.9 354.4 1173.5 353.4 1174.55 352.75 1176.45 351.55 1178.65 352 1180.8 352.55 1181.95 354.4 1183.2 356.3 1182.7 358.45 1182.2 360.6 1180.3 361.8 L1179.9 362.05 1180.7 362.9 Q1181.35 363.85 1181.1 365 L1180.55 366.1 1180.9 366.65 Q1182.1 368.5 1181.65 370.65 1181.15 372.85 1179.25 374.05 1178 374.85 1176.55 374.85 L1176.6 376.3 Q1176.35 377.45 1175.35 378.05 1176.4 379.8 1175.95 381.85 1175.45 384 1173.6 385.25 1172.2 386.05 1170.7 386.05 L1168.2 385.45 M1172.2 428.7 Q1171.75 427.55 1172.2 426.4 L1172.9 425.4 Q1172.05 424.9 1171.65 423.95 1171.2 422.8 1171.65 421.6 1172.15 420.45 1173.35 419.95 L1174.8 419.7 1174.5 419.15 Q1174 418 1174.5 416.8 1175 415.65 1176.15 415.15 1177.35 414.65 1178.5 415.15 1179.7 415.6 1180.2 416.8 1180.65 418 1180.2 419.15 L1179.8 419.8 Q1180.8 420.35 1181.3 421.4 1181.75 422.6 1181.25 423.75 1180.8 424.95 1179.6 425.4 1178.45 425.9 1177.25 425.4 L1177.2 425.4 1177.9 426.4 Q1178.35 427.6 1177.9 428.75 1177.4 429.95 1176.25 430.45 L1174.8 430.65 1172.2 428.7 M1171.15 368.25 L1171.2 368.15 1171.15 368.25 M1135.5 442.75 Q1145.9 456.35 1152.75 472.85 L1143.9 472.85 1135.5 442.75 M1178.6 457.05 Q1177.05 464.9 1175.95 472.85 L1173.75 472.85 Q1175.8 464.75 1178.6 457.05 M1196.65 445.75 L1189.1 472.85 1180.75 472.85 Q1187.25 458.1 1196.65 445.75 M1108.1 408.95 L1106.6 410 1105.1 410.5 Q1103.2 410.85 1101.65 409.75 1100.05 408.65 1099.75 406.75 1099.45 404.85 1100.55 403.3 L1100.8 403 1099.85 402.55 Q1099.05 402 1098.85 401.05 L1098.9 399.95 1098.45 399.65 Q1096.9 398.55 1096.55 396.7 1096.25 394.8 1097.35 393.25 1098.1 392.2 1099.25 391.7 1098.8 391.2 1098.7 390.55 1098.55 389.6 1099.1 388.8 1097.7 387.7 1097.4 385.95 1097.1 384.05 1098.2 382.5 1099.3 380.95 1101.2 380.6 1103.05 380.3 1104.6 381.4 1106.2 382.5 1106.5 384.4 L1106.55 385.95 Q1107.65 386.1 1108.6 386.8 1110.2 387.9 1110.5 389.8 1110.85 391.65 1109.75 393.2 1110.25 393.75 1110.4 394.55 1110.55 395.5 1110 396.3 L1109.8 396.55 Q1110.8 397.55 1111.1 399.05 1111.4 400.8 1110.4 402.3 L1110.65 402.45 Q1111.45 403 1111.6 404 1111.8 404.95 1111.2 405.75 1110.65 406.55 1109.65 406.75 L1108.85 406.75 Q1108.7 407.75 1108.05 408.6 L1108.05 408.65 1108.1 408.95 M1105.7 395.15 L1105.7 395.25 1105.7 395.15 M1091.6 462.75 L1091.35 462.8 Q1090.45 462.8 1089.8 462.15 1089.15 461.5 1089.15 460.6 L1089.25 460.05 Q1088.4 460 1087.85 459.4 1087.2 458.75 1087.2 457.85 1087.2 456.95 1087.85 456.3 1088.5 455.7 1089.4 455.7 L1089.45 455.7 1088.7 455.2 Q1088.05 454.55 1088.05 453.65 1088.05 452.75 1088.7 452.1 1089.35 451.45 1090.25 451.45 1091.15 451.45 1091.8 452.1 1092.45 452.75 1092.45 453.65 L1092.25 454.5 Q1092.95 454.6 1093.45 455.1 1094.1 455.75 1094.1 456.65 1094.1 457.55 1093.45 458.2 L1092.55 458.75 1092.9 459.05 Q1093.55 459.7 1093.55 460.6 1093.55 461.5 1092.9 462.15 L1092.7 462.3 1091.6 462.75 M1077.35 429.4 Q1084.6 449.55 1087.2 472.85 L1082.6 472.85 Q1081.45 450.7 1077.35 429.4"
        />
        <path
          stroke="none"
          fill="url(#gradient90)"
          d="M1168.2 385.45 L1170.7 386.05 Q1166.4 415.25 1165.95 445.7 1168.35 436.75 1172.2 428.7 L1174.8 430.65 1168.1 472.85 1153.8 472.85 1142.45 401.4 Q1153.85 420.5 1158.7 443.85 1160.65 412.75 1168.2 385.45"
        />
        <path
          stroke="none"
          fill="url(#gradient91)"
          d="M1108.1 408.95 Q1115.1 433.5 1115.75 462.4 1120.6 438.8 1132.1 419.5 L1123.6 472.85 1107.1 472.85 1087.75 429.4 Q1100.65 441.95 1110.15 458.3 1110.15 433.6 1106.6 410 L1108.1 408.95"
        />
        <path
          stroke="none"
          fill="url(#gradient92)"
          d="M1091.6 462.75 L1092.7 462.3 1095.6 472.85 1093.05 472.85 1091.6 462.75"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1303.15 370 L1313.1 370 1313.1 471 1303.15 471 1303.15 370 M1207.65 407.5 L1212.65 407.5 1212.65 471 1207.65 471 1207.65 407.5 M1245.9 389.75 L1250.9 389.75 1250.9 471 1245.9 471 1245.9 389.75 M1271.65 371 L1281.6 371 1281.6 471 1271.65 471 1271.65 371"
        />
        <path
          stroke="none"
          fill="url(#gradient93)"
          d="M1268.85 471 L1258.9 471 1258.9 353.75 1268.85 353.75 1268.85 471 M1222.4 371 L1232.35 371 1232.35 471 1222.4 471 1222.4 371 M1287.4 387 L1292.4 387 1292.4 471 1287.4 471 1287.4 387 M1318.4 410 L1323.4 410 1323.4 471 1318.4 471 1318.4 410"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1407.5 452.05 L1407.5 470.75 1382.85 470.75 1379.5 451.1 Q1380.2 417.4 1354.3 383.55 L1362.25 377.5 Q1376.9 396.45 1383.35 419.75 1386.95 435.5 1394.75 450.25 L1394.75 441.9 Q1397.6 397.5 1431.2 354 L1439.1 360.05 Q1407.7 401.05 1407.5 452.05 M1417.35 460.2 Q1422.5 452.4 1437.6 440.85 L1443.7 448.8 Q1438.25 452.95 1433.75 458.05 1440.35 457.3 1447.8 460.35 L1444.15 469.65 Q1435.55 466.45 1428.65 470.75 L1410.55 470.75 1417.35 460.2 M1388.2 466.8 L1388.45 467.65 1388.2 466.8"
        />
        <path
          stroke="none"
          fill="url(#gradient94)"
          d="M1383.35 419.75 Q1384.85 400.85 1392.4 383.35 L1401.55 387.3 Q1387.7 419.9 1394.75 441.9 L1394.75 450.25 Q1386.95 435.5 1383.35 419.75"
        />
        <path
          stroke="none"
          fill="url(#gradient95)"
          d="M1382.85 470.75 L1361.8 470.75 1360.55 468.75 Q1355.2 467.15 1348.85 469.65 L1345.2 460.35 Q1348.95 458.85 1352.5 458.35 1348.5 454.05 1343.75 450.4 L1349.8 442.45 Q1359.25 449.75 1366.2 459.35 1358.65 435.1 1340.25 420.9 L1346.3 412.95 Q1370.8 431.6 1379.5 451.1 L1382.85 470.75"
        />
        <path
          stroke="none"
          fill="url(#gradient96)"
          d="M1407.5 452.05 Q1412.65 434.25 1429.45 418.45 L1436.3 425.7 Q1418.35 442.8 1417.35 460.2 L1410.55 470.75 1407.5 470.75 1407.5 452.05"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1522.15 355.5 Q1525.8 355.5 1528.4 358.1 1531 360.7 1531 364.35 L1531 469.25 1513.25 469.25 1513.25 364.35 Q1513.25 360.7 1515.85 358.1 1518.45 355.5 1522.15 355.5 M1569.4 431 Q1573.05 431 1575.65 433.6 1578.25 436.2 1578.25 439.85 L1578.25 469.25 1560.5 469.25 1560.5 439.85 Q1560.5 436.2 1563.1 433.6 1565.7 431 1569.4 431 M1475.65 408 Q1479.3 408 1481.9 410.6 1484.5 413.2 1484.5 416.85 L1484.5 469.25 1466.75 469.25 1466.75 416.85 Q1466.75 413.2 1469.35 410.6 1471.95 408 1475.65 408"
        />
        <path
          stroke="none"
          fill="url(#gradient97)"
          d="M1545.4 371 Q1549.05 371 1551.65 373.6 1554.25 376.2 1554.25 379.85 L1554.25 469.25 1536.5 469.25 1536.5 379.85 Q1536.5 376.2 1539.1 373.6 1541.7 371 1545.4 371"
        />
        <path
          stroke="none"
          fill="url(#gradient98)"
          d="M1500.15 431 Q1503.8 431 1506.4 433.6 1509 436.2 1509 439.85 L1509 469.25 1491.25 469.25 1491.25 439.85 Q1491.25 436.2 1493.85 433.6 1496.45 431 1500.15 431"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1646.65 374.6 Q1638.55 374.4 1632.75 369.85 1626.65 365.1 1626.65 358.35 1626.65 355.25 1632.75 353.05 1638.85 350.85 1647.5 350.85 1656.15 350.85 1662.25 353.05 1668.4 355.25 1668.4 358.35 1668.4 365.1 1662.25 369.85 1656.45 374.4 1648.35 374.6 L1646.65 374.6 M1670.4 396.8 Q1666 394.85 1663.25 391.2 1659.45 386.25 1660.9 380.95 1661.55 378.55 1666.75 378.1 1672 377.65 1678.75 379.45 1685.5 381.3 1689.8 384.25 1694.15 387.25 1693.5 389.7 1692.05 394.95 1686.3 397.4 1680.55 399.85 1673.8 398 L1673.1 397.8 1670.4 396.8 M1667.6 414.95 L1667.7 414.9 Q1671.3 414.65 1675.95 415.85 1680.6 417.1 1683.6 419.15 1686.55 421.2 1686.1 422.9 1685.1 426.5 1681.15 428.2 1677.2 429.85 1672.55 428.6 L1672.3 428.55 1669.75 428 1669.95 427.7 Q1667.3 426.45 1665.55 424.25 1659.5 416.05 1667.6 414.95 M1623.3 437.05 Q1617.1 438.45 1611.75 436.2 1605.95 433.75 1604.55 428.5 1603.9 426.05 1608.2 423.05 1612.55 420.05 1619.3 418.25 1626.05 416.45 1631.3 416.9 L1633.1 417.15 Q1640.35 419.5 1635.65 428.75 L1634.8 430 Q1631.2 434.7 1625.05 436.6 L1623.3 437.05 M1624.25 393 L1623.7 393.1 Q1619.1 394.35 1615.1 392.7 1611.15 391 1610.15 387.4 1609.7 385.7 1612.7 383.7 1615.65 381.6 1620.3 380.35 1624.95 379.15 1628.55 379.45 1632.15 379.7 1632.6 381.4 1633.55 385 1630.95 388.45 1628.95 391.1 1625.75 392.45 L1624.25 393"
        />
        <path
          stroke="none"
          fill="url(#gradient99)"
          d="M1624.25 393 L1625.75 392.45 1626.75 393.9 1629.8 398.85 1632.65 403.95 1634.6 407.9 1636.4 411.95 1641.65 426.35 1643.6 433.75 1646.65 374.6 1648.35 374.6 1650.6 415.5 1651.7 440.8 1652 446.15 1652.35 452.2 1652.4 455 1652.65 452.95 1653.1 450.4 1653.35 448.8 1658.05 427.4 1661 417.85 1664.65 408.3 1666.45 404.25 1668.4 400.3 1670.4 396.8 1673.1 397.8 1672.55 399.05 1671.05 403.2 1671 403.3 1670.2 405.75 1668.95 409.85 1667.75 414.25 1667.6 414.95 Q1659.5 416.05 1665.55 424.25 L1663.65 435.8 1663.1 440.9 1664.2 438.4 1666.95 432.95 1669.75 428 1672.3 428.55 1671.4 430.4 1668.85 437.2 1668.8 437.35 1668.75 437.45 1667.95 439.9 1666.7 444 1665.5 448.35 1664.6 452.1 1661.65 468.05 1661.05 473.85 1634.55 473.85 1633.9 470 1631.8 460.6 1630.6 456.25 1629.35 452.15 1628.55 449.7 1628.5 449.6 1628.45 449.45 1625.9 442.65 1623.3 437.05 1625.05 436.6 1628.25 441.5 1631.15 446.7 1633.1 450.65 1634.9 454.7 1639.5 467.5 1638.5 452.5 1638.4 449.95 1637.8 442.65 1635.65 428.75 Q1640.35 419.5 1633.1 417.15 L1632.1 413.5 1630.85 409.4 1630.05 406.95 1630 406.85 1629.25 404.7 1625.85 396.3 1624.25 393"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1777.5 476.35 L1762.5 476.35 Q1766.7 397.8 1777.5 348.35 L1777.5 476.35"
        />
        <path
          stroke="none"
          fill="url(#gradient100)"
          d="M1777.5 476.35 L1777.5 348.35 Q1788.35 397.8 1792.5 476.35 L1777.5 476.35"
        />
        <path
          stroke="none"
          fill="url(#gradient101)"
          d="M1897.55 476.35 Q1888.4 442.45 1887.05 421.1 1892.8 430.65 1898.75 442.7 L1897.55 476.35"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1897.55 476.35 L1898.75 442.7 Q1901.05 386.75 1905.55 348.35 1909.2 379.7 1911.45 422.8 L1913.55 476.35 1897.55 476.35"
        />
        <path
          stroke="none"
          fill="url(#gradient102)"
          d="M1911.45 422.8 Q1918.35 398.55 1925 379.85 1923.25 417.1 1913.55 476.35 L1911.45 422.8"
        />
        <path
          stroke="none"
          fill="url(#gradient103)"
          d="M2034.5 348.35 Q2040.95 379.05 2043.8 428.05 2045.8 462.2 2034.5 476.35 L2034.5 348.35"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M2034.5 348.35 L2034.5 476.35 Q2023.2 462.2 2025.25 428.05 2028.1 379.05 2034.5 348.35"
        />
        <path
          stroke="none"
          fill="url(#gradient104)"
          d="M2161 348.35 Q2187 369.5 2193 429.45 2193.7 477 2161 476.35 L2161 348.35"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M2161 348.35 L2161 476.35 Q2128.3 477 2129 429.45 2135.05 369.5 2161 348.35"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M241.5 604.9 L240.75 604.65 Q214.8 589.15 215.8 559.15 L216 555.2 216 555 Q216.7 543.45 218.9 535.35 221.2 526.75 225.15 521.95 L227.95 518.2 Q238.55 503.3 240 478.3 240.05 477.7 240.5 477.3 240.9 476.9 241.5 476.9 L241.5 604.9"
        />
        <path
          stroke="none"
          fill="url(#gradient105)"
          d="M241.5 604.9 L241.5 476.9 Q242.1 476.9 242.55 477.3 L243 478.3 Q244.45 503.25 255.05 518.2 L257.85 521.95 Q261.8 526.75 264.15 535.35 266.35 543.45 267 555 L267 555.3 267.2 559.15 Q268.2 589.15 242.3 604.65 L241.5 604.9"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M370 604.9 Q359.65 604.9 349.25 602.65 346.4 601.8 346.3 600.45 346.2 599.2 348.65 598.05 344.75 597.1 341.85 595.75 337.8 593.8 338.15 592.2 338.4 590.8 341.55 590.35 336.85 587.6 334 584.75 330.9 581.6 331.8 580.2 332.5 579.15 335.05 579.45 L334.4 578.45 Q331.45 573.4 330.4 569.25 329.4 565.15 330.95 564.3 332 563.8 333.75 564.95 L333 562.55 Q331.45 557 331.5 552.75 331.6 548.5 333.3 548.05 L334.15 548.1 Q333.45 544.7 333.5 541.9 333.6 537.65 335.3 537.2 336.3 537 337.55 538.15 336.95 532.45 337.75 528.3 338.6 524.1 340.35 523.95 341.45 523.85 342.5 525.35 L342.3 523.7 Q341.7 518 342.55 513.8 343.4 509.6 345.15 509.45 345.75 509.4 346.4 509.9 346.7 505.15 347.85 501.75 349.25 497.65 351 497.75 352.4 497.75 353.35 500.3 L353.55 499.45 Q354.7 493.8 356.75 490 358.85 486.2 360.6 486.55 361.95 486.8 362.45 489.4 L363 487.95 Q365.1 482.55 367.8 479.15 369 477.6 370 476.9 L370 604.9"
        />
        <path
          stroke="none"
          fill="url(#gradient106)"
          d="M370 604.9 L370 476.9 372.25 479.15 Q374.9 482.55 377.05 487.95 L377.55 489.4 Q378.1 486.8 379.45 486.55 381.2 486.2 383.25 490 385.35 493.8 386.5 499.45 L386.65 500.3 Q387.65 497.75 389.05 497.75 390.8 497.65 392.2 501.75 393.35 505.15 393.65 509.9 394.25 509.4 394.9 509.45 396.65 509.6 397.5 513.8 398.3 518 397.75 523.7 L397.5 525.35 Q398.6 523.85 399.65 523.95 401.45 524.1 402.25 528.3 403.1 532.45 402.5 538.15 403.7 537 404.75 537.2 406.45 537.65 406.5 541.9 406.55 544.7 405.9 548.1 L406.75 548.05 Q408.45 548.5 408.55 552.75 408.6 557 407 562.55 L406.25 564.95 Q408.05 563.8 409.1 564.3 410.65 565.15 409.6 569.25 408.6 573.4 405.6 578.45 L405 579.45 Q407.55 579.15 408.2 580.2 409.1 581.6 406.05 584.75 403.2 587.6 398.5 590.35 401.6 590.8 401.9 592.2 402.25 593.8 398.2 595.75 395.3 597.1 391.4 598.05 393.85 599.2 393.75 600.45 393.65 601.8 390.85 602.6 380.45 604.9 370 604.9"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M463.75 576.35 Q453.8 559.35 449.25 531.4 L470.85 549.35 Q465.8 530.2 466.9 505.75 L482.6 521.25 Q482.3 490.1 498.5 476.9 514.75 490.1 514.4 521.25 L530.15 505.75 Q531.05 527.55 526.15 549.35 L547.8 531.4 Q544.3 555.3 533.25 576.35 L547.8 574.1 Q532.05 596.55 498.5 601.9 467.7 601.25 449.25 574.1 L463.75 576.35"
        />
        <path
          stroke="none"
          fill="url(#gradient107)"
          d="M530.15 505.75 Q540.95 530.3 526.15 549.35 531.05 527.55 530.15 505.75"
        />
        <path
          stroke="none"
          fill="url(#gradient108)"
          d="M470.85 549.35 Q456.1 530.3 466.9 505.75 465.8 530.2 470.85 549.35"
        />
        <path
          stroke="none"
          fill="url(#gradient109)"
          d="M547.8 574.1 Q540.5 614.45 498.5 601.9 532.05 596.55 547.8 574.1"
        />
        <path
          stroke="none"
          fill="url(#gradient110)"
          d="M547.8 531.4 Q551.85 561.45 533.25 576.35 544.3 555.3 547.8 531.4"
        />
        <path
          stroke="none"
          fill="url(#gradient111)"
          d="M498.5 601.9 Q456.55 614.45 449.25 574.1 467.7 601.25 498.5 601.9"
        />
        <path
          stroke="none"
          fill="url(#gradient112)"
          d="M463.75 576.35 Q445.2 561.45 449.25 531.4 453.8 559.35 463.75 576.35"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M596 499.8 Q600.1 499.1 606.6 501.9 608.55 502.7 610.5 503.8 611.2 494.05 614.4 486.65 618.75 476.75 625 476.85 631.25 476.75 635.6 486.65 638.8 494.05 639.5 503.8 641.45 502.7 643.4 501.9 649.95 499.1 654 499.8 654.45 513.15 649.2 530.3 655.6 528 661.55 527.15 674.9 525.2 678.65 531.3 671.85 547.8 657.05 564.3 661.25 566.1 664.85 568.35 670.5 571.9 672.65 575.5 660.5 585.35 644.85 590.85 L646.15 593.1 Q648.25 597.05 648.15 599.8 636.6 600.95 625 597 613.45 600.95 601.85 599.8 601.75 597.05 603.85 593.1 L605.15 590.85 Q589.5 585.35 577.4 575.5 579.5 571.9 585.2 568.35 588.75 566.1 593 564.3 578.15 547.8 571.35 531.3 575.15 525.2 588.45 527.15 594.4 528 600.8 530.3 595.55 513.15 596 499.8"
        />
        <path
          stroke="none"
          fill="url(#gradient113)"
          d="M654 499.8 Q656.45 500.2 658 501.85 662.45 506.05 657.95 516.45 655 523.35 649.2 530.3 654.45 513.15 654 499.8"
        />
        <path
          stroke="none"
          fill="url(#gradient114)"
          d="M678.65 531.3 L678.9 531.7 Q682.8 538.1 674.2 549 667.75 557.15 657.05 564.3 671.85 547.8 678.65 531.3"
        />
        <path
          stroke="none"
          fill="url(#gradient115)"
          d="M600.8 530.3 Q595 523.35 592.05 516.45 587.6 506.05 592 501.85 593.6 500.2 596 499.8 595.55 513.15 600.8 530.3"
        />
        <path
          stroke="none"
          fill="url(#gradient116)"
          d="M593 564.3 Q582.3 557.15 575.85 549 567.25 538.1 571.1 531.7 L571.35 531.3 Q578.15 547.8 593 564.3"
        />
        <path
          stroke="none"
          fill="url(#gradient117)"
          d="M605.15 590.85 Q596.45 591.45 589.2 590.05 577.3 587.65 576.25 581.2 575.65 578.35 577.4 575.5 589.5 585.35 605.15 590.85"
        />
        <path
          stroke="none"
          fill="url(#gradient118)"
          d="M625 597 Q618.85 601.85 613 603.85 605.75 606.3 603.15 603 L603.1 603 Q601.95 601.7 601.85 599.8 613.45 600.95 625 597"
        />
        <path
          stroke="none"
          fill="url(#gradient119)"
          d="M672.65 575.5 Q674.35 578.35 673.75 581.2 672.7 587.65 660.8 590.05 653.6 591.45 644.85 590.85 660.5 585.35 672.65 575.5"
        />
        <path
          stroke="none"
          fill="url(#gradient120)"
          d="M648.15 599.8 Q648.1 601.7 646.9 603 644.3 606.3 637 603.85 631.15 601.85 625 597 636.6 600.95 648.15 599.8"
        />
        <path
          stroke="none"
          fill="url(#gradient121)"
          d="M724.45 552.1 Q714.5 548.75 703.5 537.8 L708.7 535.2 Q702.4 528.5 698.65 516.7 710.65 535.5 724.45 552.1"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M724.45 552.1 Q710.65 535.5 698.65 516.7 710.45 516.3 719.95 520.45 L722.7 515.6 740.5 531.2 746.9 531.2 Q740.1 519.05 736.35 500.65 L744.5 500.65 Q748.2 486.7 753.5 476.9 758.85 486.7 762.55 500.65 L770.7 500.65 Q766.95 519.05 760.15 531.2 L766.5 531.2 784.35 515.6 787.05 520.45 Q796.55 516.3 808.35 516.7 796.35 535.5 782.6 552.1 797.9 556.05 809 564.2 781.95 569.45 755.85 567.55 L757.45 602.55 Q757.6 604.9 755.2 604.9 L751.85 604.9 Q749.45 604.9 749.55 602.55 L751.15 567.55 Q725.05 569.45 698 564.2 709.1 556.05 724.45 552.1"
        />
        <path
          stroke="none"
          fill="url(#gradient122)"
          d="M740.5 531.2 Q736.95 516.65 736.35 500.65 740.1 519.05 746.9 531.2 L740.5 531.2"
        />
        <path
          stroke="none"
          fill="url(#gradient123)"
          d="M770.7 500.65 Q770.1 516.65 766.5 531.2 L760.15 531.2 Q766.95 519.05 770.7 500.65"
        />
        <path
          stroke="none"
          fill="url(#gradient124)"
          d="M751.15 567.55 Q742.75 576.7 733.7 579.15 L733.7 574.75 Q723.35 577.6 713.85 574.75 L713.85 570.35 Q704.25 568.6 698 564.2 725.05 569.45 751.15 567.55"
        />
        <path
          stroke="none"
          fill="url(#gradient125)"
          d="M808.35 516.7 Q804.6 528.5 798.3 535.2 L803.5 537.8 Q792.55 548.75 782.6 552.1 796.35 535.5 808.35 516.7"
        />
        <path
          stroke="none"
          fill="url(#gradient126)"
          d="M809 564.2 Q802.75 568.6 793.15 570.35 L793.15 574.75 Q783.65 577.6 773.35 574.75 L773.35 579.15 Q764.25 576.7 755.85 567.55 781.95 569.45 809 564.2"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M837.85 503.6 L838 503.55 838.3 503.55 Q855.5 511.7 866.5 529.5 869 498.85 882 480.9 895 498.85 897.5 529.5 908.45 511.8 925.55 503.65 L908.9 547 Q928.05 539 945.65 543.2 L945.95 543.35 Q923.2 556.15 898.6 562.35 912.25 574.7 919.4 587.05 L919.45 587.35 919.35 587.6 919.2 587.7 883.4 571.3 883.9 598.85 Q883.9 600.9 882.8 600.9 L881.25 600.9 Q880.1 600.9 880.15 598.85 L880.65 571.25 844.6 587.5 844.55 587.35 844.6 587.05 Q851.8 574.7 865.45 562.35 839.95 556.95 818 543.65 L818.1 543.35 818.35 543.2 Q836 539 855.15 547 L837.85 503.6"
        />
        <path
          stroke="none"
          fill="url(#gradient127)"
          d="M837.85 503.6 L855.15 547 Q839.05 529.75 837.65 504 L837.75 503.7 837.85 503.6"
        />
        <path
          stroke="none"
          fill="url(#gradient128)"
          d="M865.45 562.35 Q838.85 566.05 818.15 543.95 L818 543.65 Q839.95 556.95 865.45 562.35"
        />
        <path
          stroke="none"
          fill="url(#gradient129)"
          d="M925.55 503.65 L925.75 503.55 926.05 503.55 926.3 503.7 926.4 504 Q925 529.75 908.9 547 L925.55 503.65"
        />
        <path
          stroke="none"
          fill="url(#gradient130)"
          d="M945.95 543.35 L946 543.65 945.9 543.95 Q925.15 566.05 898.6 562.35 923.2 556.15 945.95 543.35"
        />
        <path
          stroke="none"
          fill="url(#gradient131)"
          d="M919.2 587.7 L919.05 587.75 Q898.95 589.4 883.4 571.3 L919.2 587.7"
        />
        <path
          stroke="none"
          fill="url(#gradient132)"
          d="M880.65 571.25 Q865.1 589.4 844.95 587.75 844.8 587.75 844.7 587.6 L844.6 587.5 880.65 571.25"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M985.3 558.7 L961 522.75 Q976.9 519.65 987.85 522.75 995.05 494.6 1010.5 476.9 1026 494.6 1033.2 522.75 1044.15 519.65 1060 522.75 L1035.75 558.7 Q1045.85 572.7 1048.55 590.45 L1012.25 568.45 Q1012.65 582.15 1015.15 601.55 1015.3 604.85 1013.15 604.9 L1007.9 604.9 Q1005.7 604.85 1005.9 601.55 1008.4 582.15 1008.8 568.45 L972.5 590.45 Q975.2 572.7 985.3 558.7"
        />
        <path
          stroke="none"
          fill="url(#gradient133)"
          d="M985.3 558.7 Q966.35 548.2 961 522.75 L985.3 558.7"
        />
        <path
          stroke="none"
          fill="url(#gradient134)"
          d="M1060 522.75 Q1054.7 548.2 1035.75 558.7 L1060 522.75"
        />
        <path
          stroke="none"
          fill="url(#gradient135)"
          d="M1048.55 590.45 Q1029.85 585.4 1012.25 568.45 L1048.55 590.45"
        />
        <path
          stroke="none"
          fill="url(#gradient136)"
          d="M1008.8 568.45 Q991.2 585.4 972.5 590.45 L1008.8 568.45"
        />
        <path
          stroke="none"
          fill="url(#gradient137)"
          d="M1137 604.9 L1137 476.9 Q1138.85 476.9 1140.15 480.15 1141.4 483.4 1141.45 487.9 1143.2 486.1 1144.85 486.55 1146.9 487.1 1147.4 491.2 1147.65 493.45 1147.35 495.95 1149.25 493.95 1151 494.4 1153.05 494.95 1153.55 499.05 1153.85 501.7 1153.4 504.8 L1153.45 504.7 Q1156.35 501.7 1158.35 502.6 1160.3 503.4 1160.25 507.6 1160.2 510.4 1159.2 513.65 L1159.85 513.15 Q1163.15 510.5 1165 511.65 1166.85 512.7 1166.25 516.85 L1165.4 520.3 Q1167.15 519.1 1168.5 519.7 1170.45 520.55 1170.4 524.65 1170.4 527.3 1169.55 530.35 1171.15 529.15 1172.45 529.6 1174.4 530.3 1174.7 534.4 1175 538.65 1173.35 543.9 1172.75 545.75 1171.95 547.4 L1171.65 548.1 Q1159.65 574 1140.3 582.25 L1141.1 602.2 Q1141.15 604.9 1138.4 604.9 L1137 604.9"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1137 604.9 L1135.6 604.9 Q1132.85 604.9 1132.95 602.2 L1133.75 582.25 Q1114.35 574.05 1102.4 548.1 L1102.05 547.4 1100.65 543.9 Q1099 538.65 1099.3 534.4 1099.6 530.3 1101.55 529.6 1102.85 529.15 1104.45 530.35 1103.6 527.3 1103.6 524.65 1103.6 520.55 1105.5 519.7 1106.85 519.1 1108.6 520.3 1108 518.55 1107.75 516.85 1107.15 512.7 1109 511.65 1110.85 510.5 1114.15 513.15 L1114.8 513.65 Q1113.8 510.4 1113.75 507.6 1113.7 503.4 1115.65 502.6 1117.7 501.7 1120.55 504.7 L1120.65 504.8 Q1120.2 501.7 1120.45 499.05 1120.95 494.95 1123.05 494.4 1124.75 493.95 1126.65 495.95 1126.35 493.45 1126.6 491.2 1127.1 487.1 1129.2 486.55 1130.8 486.1 1132.55 487.9 1132.6 483.4 1133.85 480.15 1135.15 476.9 1137 476.9 L1137 604.9"
        />
        <path
          stroke="none"
          fill="url(#gradient138)"
          d="M1265.05 600.45 Q1261.6 600.45 1259.1 595.4 L1258.3 593.45 Q1254.55 596.2 1251.7 594.95 1249.3 593.85 1248.6 590.35 1246.2 592.3 1243.65 593.5 1238.6 595.85 1235.9 593.65 1233.5 591.7 1234.25 587.2 1230.25 589.8 1226.3 590.75 1220.85 592.05 1218.65 589.35 1216.45 586.65 1218.8 581.55 1220.45 577.9 1223.8 574.6 L1222.35 573.4 Q1220.9 571.65 1221.45 568.8 L1216.25 568.95 Q1210.7 568.45 1209.45 565.2 1208.2 561.95 1212.05 557.85 L1213.65 556.35 1211.85 555.2 Q1207.25 551.95 1207.85 548.55 1208.4 545.1 1213.75 543.5 1217.65 542.35 1222.4 542.6 L1222.1 541.8 Q1221.35 538.4 1225.7 534.9 1226.9 533.95 1228.25 533.2 1227.6 532.45 1227.3 531.55 1226.4 528.9 1228.8 525.85 L1225.15 524.1 Q1220.35 521.2 1220.65 517.75 1220.95 514.3 1226.2 512.3 1227.4 511.8 1228.75 511.5 1226.85 509.7 1225.5 507.7 1222.4 503.1 1224.1 500.05 1225.85 497.05 1231.45 497.45 1235.3 497.75 1239.45 499.55 1240 496.9 1241.9 495.85 1243.4 495 1245.3 495.3 L1244.85 492.2 Q1244.45 486.6 1247.45 484.9 1250.45 483.15 1255.1 486.3 1256.7 487.35 1258.15 488.75 1258.55 487.5 1259.1 486.35 1261.6 481.3 1265.05 481.3 1268.5 481.3 1270.95 486.35 1271.85 488.15 1272.45 490.3 1276.6 487.7 1279.4 489.35 1281.55 490.55 1281.95 493.85 1284.6 490.3 1287.8 488.15 1292.45 485 1295.45 486.75 1298.45 488.5 1298.05 494.1 1297.85 496.55 1297.1 499.15 L1297.2 499.1 Q1302.7 497.9 1304.85 500.6 1307 503.3 1304.6 508.4 1303.05 511.6 1300.3 514.55 1301.4 515 1302.15 515.95 1303.15 517.2 1303.2 519 1305.75 517.1 1308.45 516 1313.7 513.95 1316.25 516.3 1318.8 518.65 1317.2 524 1316.25 527.25 1314.15 530.4 L1315.3 530.65 Q1320.75 532 1321.45 535.4 1322.15 538.8 1317.75 542.25 1315 544.4 1311.3 545.8 1312.65 546.9 1312.95 548.45 1313.35 550.25 1312.3 552.1 1315.75 552.85 1318.5 554.4 1323.45 557.1 1323.25 560.6 1323.1 564.05 1317.9 566.25 L1315.85 567 Q1319.3 570.95 1318.05 574.05 1317.05 576.5 1313.55 577.35 1317.2 580.2 1319.35 583.55 1322.35 588.3 1320.5 591.25 1318.7 594.2 1313.1 593.65 1308.85 593.2 1304.35 590.95 1304.3 593.35 1302.85 594.75 1300.3 597.1 1295.05 595.1 1292.05 594 1289.15 591.8 1289.3 597.25 1286.3 598.85 1283.25 600.5 1278.7 597.25 1275.35 594.8 1272.6 590.75 1272 593.25 1270.95 595.4 1268.5 600.45 1265.05 600.45 M1273.25 584.35 Q1275.75 583.85 1276.85 579.85 1277.35 578.15 1277.45 576.25 1280 578.8 1282.75 580.15 1286.5 581.9 1288.5 580.25 1290.45 578.7 1289.6 574.75 1292 575.95 1294.35 576.35 1298.45 577.1 1299.95 575.05 1300.85 573.8 1300.55 572.05 1304.15 573.1 1307.3 572.85 1311.45 572.5 1312.35 570.1 1313.3 567.7 1310.5 564.65 1308.45 562.5 1305.4 560.9 1307.85 559.85 1308.25 557.9 1308.75 555.5 1305.7 553.05 L1307.1 552.25 Q1310.55 549.95 1310.2 547.4 1309.85 544.85 1305.9 543.55 1303.7 542.8 1301.05 542.7 1301.6 541.25 1301.05 540 1300.6 538.9 1299.5 538.25 1302 536.75 1303.7 534.8 1306.45 531.7 1305.45 529.35 1304.5 526.95 1300.35 526.75 L1299.5 526.7 Q1300.55 524.1 1300.85 521.6 1301.25 517.5 1299.1 516.15 1296.9 514.8 1293.4 517 1291.55 518.1 1289.95 519.9 1289.7 518.55 1288.8 517.8 1288.1 517.2 1287.25 517 1288.85 514.5 1289.55 511.95 1290.6 507.95 1288.65 506.25 1286.7 504.55 1282.9 506.2 L1282.8 506.25 1282.85 502.45 Q1282.35 498.3 1279.95 497.45 1277.5 496.6 1274.55 499.5 1272.55 501.5 1271.1 504.45 1270.35 502.1 1268.6 501.5 1266.4 500.7 1263.65 503.15 L1262.1 500.45 Q1259.6 497.15 1257.1 497.6 1254.55 498.05 1253.45 502.05 L1253.05 503.95 Q1251.8 503.15 1250.55 502.6 1246.75 500.95 1244.8 502.6 1242.85 504.25 1243.85 508.3 1244.15 509.4 1244.6 510.5 1243.2 510.5 1242.2 511.3 1241 512.35 1240.95 514.35 L1234.8 513.9 Q1230.7 514.4 1229.85 516.8 1229 519.25 1231.9 522.2 L1234.75 524.5 1233 525.4 Q1229.45 527.6 1229.7 530.15 1229.95 532.7 1233.85 534.15 L1236.75 534.95 Q1235.45 537.5 1236.45 539.3 L1237.35 540.35 1235.75 541.95 Q1233.05 545.1 1234.05 547.45 L1234.35 548 Q1230.85 548.45 1228.2 549.85 1224.5 551.75 1224.55 554.3 1224.6 556.85 1228.4 558.6 L1229.85 559.2 1228.9 560.5 Q1226.65 564 1228 566.2 1229.35 568.4 1233.45 568 L1237.2 567.2 Q1237.2 569.35 1238.5 570.45 L1239.7 571.1 Q1237.75 573.95 1237 576.85 1236 580.85 1237.95 582.55 1239.9 584.2 1243.7 582.5 1246.45 581.3 1249.05 578.85 1249.1 582.25 1251.1 583.35 1253.35 584.55 1256.75 582.15 1258.45 580.95 1259.9 579.2 1260.85 581.65 1262.8 582.1 1265.05 582.65 1267.4 580.15 L1268.25 581.45 Q1270.75 584.8 1273.25 584.35"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1273.25 584.35 Q1270.75 584.8 1268.25 581.45 L1267.4 580.15 Q1265.05 582.65 1262.8 582.1 1260.85 581.65 1259.9 579.2 1258.45 580.95 1256.75 582.15 1253.35 584.55 1251.1 583.35 1249.1 582.25 1249.05 578.85 1246.45 581.3 1243.7 582.5 1239.9 584.2 1237.95 582.55 1236 580.85 1237 576.85 1237.75 573.95 1239.7 571.1 L1238.5 570.45 Q1237.2 569.35 1237.2 567.2 L1233.45 568 Q1229.35 568.4 1228 566.2 1226.65 564 1228.9 560.5 L1229.85 559.2 1228.4 558.6 Q1224.6 556.85 1224.55 554.3 1224.5 551.75 1228.2 549.85 1230.85 548.45 1234.35 548 L1234.05 547.45 Q1233.05 545.1 1235.75 541.95 L1237.35 540.35 1236.45 539.3 Q1235.45 537.5 1236.75 534.95 L1233.85 534.15 Q1229.95 532.7 1229.7 530.15 1229.45 527.6 1233 525.4 L1234.75 524.5 1231.9 522.2 Q1229 519.25 1229.85 516.8 1230.7 514.4 1234.8 513.9 L1240.95 514.35 Q1241 512.35 1242.2 511.3 1243.2 510.5 1244.6 510.5 1244.15 509.4 1243.85 508.3 1242.85 504.25 1244.8 502.6 1246.75 500.95 1250.55 502.6 1251.8 503.15 1253.05 503.95 L1253.45 502.05 Q1254.55 498.05 1257.1 497.6 1259.6 497.15 1262.1 500.45 L1263.65 503.15 Q1266.4 500.7 1268.6 501.5 1270.35 502.1 1271.1 504.45 1272.55 501.5 1274.55 499.5 1277.5 496.6 1279.95 497.45 1282.35 498.3 1282.85 502.45 L1282.8 506.25 1282.9 506.2 Q1286.7 504.55 1288.65 506.25 1290.6 507.95 1289.55 511.95 1288.85 514.5 1287.25 517 1288.1 517.2 1288.8 517.8 1289.7 518.55 1289.95 519.9 1291.55 518.1 1293.4 517 1296.9 514.8 1299.1 516.15 1301.25 517.5 1300.85 521.6 1300.55 524.1 1299.5 526.7 L1300.35 526.75 Q1304.5 526.95 1305.45 529.35 1306.45 531.7 1303.7 534.8 1302 536.75 1299.5 538.25 1300.6 538.9 1301.05 540 1301.6 541.25 1301.05 542.7 1303.7 542.8 1305.9 543.55 1309.85 544.85 1310.2 547.4 1310.55 549.95 1307.1 552.25 L1305.7 553.05 Q1308.75 555.5 1308.25 557.9 1307.85 559.85 1305.4 560.9 1308.45 562.5 1310.5 564.65 1313.3 567.7 1312.35 570.1 1311.45 572.5 1307.3 572.85 1304.15 573.1 1300.55 572.05 1300.85 573.8 1299.95 575.05 1298.45 577.1 1294.35 576.35 1292 575.95 1289.6 574.75 1290.45 578.7 1288.5 580.25 1286.5 581.9 1282.75 580.15 1280 578.8 1277.45 576.25 1277.35 578.15 1276.85 579.85 1275.75 583.85 1273.25 584.35"
        />
        <path
          stroke="none"
          fill="url(#gradient139)"
          d="M1417.3 507.8 Q1415.4 506.45 1412.1 508.2 L1412.15 504.8 Q1411.8 500.9 1409.55 500.05 1407.3 499.25 1404.45 501.9 L1403.05 503.45 1402.6 501.9 Q1401.2 498.25 1398.85 498.05 1396.45 497.8 1394.4 501.1 1393 503.4 1392.35 506.45 1390.35 504 1388.25 504.35 1386.2 504.7 1385.15 507.45 1383.3 504.1 1380.9 502.1 1377.9 499.65 1375.7 500.65 1373.5 501.65 1373.45 505.5 1373.35 508.85 1374.85 512.65 1372.5 512 1371.1 513.15 1369.7 514.35 1369.85 516.8 1366.75 514.9 1363.75 514.4 1359.9 513.8 1358.5 515.75 1357.1 517.7 1358.95 521.1 L1360.35 523.2 1357.85 523.2 Q1353.95 523.6 1353.15 525.85 1352.3 528.1 1355 530.9 1356.75 532.75 1359.35 534.15 1355.9 535.5 1355.7 537.8 1355.5 539.9 1357.95 541.7 1355.55 542.5 1353.75 543.8 1350.6 546.05 1351 548.45 1351.4 550.8 1355.1 551.9 L1358.25 552.5 1357.75 553.05 Q1355.3 556.05 1356.25 558.2 1357.25 560.4 1361.15 560.5 L1362.5 560.45 Q1361.25 562.05 1360.5 563.7 1358.9 567.25 1360.4 569.1 1361.95 570.95 1365.75 570.05 L1368.1 569.25 1367.5 571.65 Q1366.85 575.5 1368.8 576.85 1370.75 578.25 1374.15 576.4 L1376.25 575.05 1376.25 577.55 Q1376.65 581.4 1378.9 582.2 1381.15 583.05 1383.95 580.4 1385.8 578.65 1387.2 576.05 1388.4 578.05 1390.1 578.2 1392.2 578.4 1394.05 575.8 L1394.15 576.6 Q1395 581.45 1397.25 584.6 1399.5 587.8 1401.85 587.35 1404.25 587 1405.3 583.25 1406 581 1405.95 578.35 L1407.25 579.55 Q1410.25 582.05 1412.45 581.05 1414.65 580.05 1414.75 576.15 1414.8 574.3 1414.35 572.35 L1414.85 572.6 Q1418.4 574.2 1420.25 572.65 1422.1 571.15 1421.2 567.35 L1421.05 566.8 1424.7 567.9 Q1428.55 568.55 1429.95 566.6 1431.35 564.65 1429.5 561.2 L1428.1 559.15 1430.6 559.1 Q1434.45 558.7 1435.3 556.45 1436.15 554.2 1433.45 551.4 L1431.8 549.9 Q1435.6 550 1438.55 548.9 1442.15 547.55 1442.4 545.15 1442.6 542.75 1439.3 540.75 1436.3 538.9 1431.95 538.35 1433.85 536.55 1433.55 534.7 1433.15 532.35 1429.4 531.2 L1429.3 531.2 1431.05 529.4 Q1433.5 526.4 1432.5 524.2 1431.5 522.05 1427.65 521.95 L1425.85 522 1427.95 518.65 Q1429.55 515.1 1428.05 513.25 1426.5 511.4 1422.75 512.3 1420.55 512.8 1418.4 514.05 L1418.6 513.05 Q1419.25 509.2 1417.3 507.8 M1379.8 488.95 Q1382.9 488.15 1386.3 492.05 L1387.2 493.15 Q1387.75 489.85 1389.05 487.2 1391.3 482.55 1394.5 482.55 1397.7 482.55 1399.95 487.2 1401.05 489.5 1401.65 492.25 L1403.1 490.35 Q1406.5 486.45 1409.55 487.25 1412.65 488.1 1413.65 493.15 L1414 496.45 1414.1 496.35 Q1418.4 493.5 1421.15 495.1 1423.3 496.35 1423.55 499.8 1427.8 495.8 1432.25 494.25 1437.1 492.6 1439.4 494.85 1441.65 497.1 1439.95 502 1438.6 505.95 1435.3 509.75 L1438.25 509.3 Q1443.4 508.95 1445 511.7 1446.6 514.45 1443.7 518.75 L1441.6 521.35 1444.95 521.7 Q1450 522.7 1450.85 525.8 1451.65 528.85 1447.75 532.25 1445.9 533.85 1443.5 535.1 L1444.2 535.45 Q1448.85 537.7 1448.85 540.9 1448.85 544.1 1444.2 546.35 L1443.5 546.65 Q1445.9 547.9 1447.75 549.5 1451.65 552.9 1450.85 556 1450 559.05 1444.95 560.05 L1442.55 560.35 Q1445.3 562.55 1447.05 565.15 1449.95 569.45 1448.35 572.2 1446.75 574.95 1441.6 574.6 1436.45 574.25 1430.75 570.95 L1429.9 570.45 Q1430.95 574.5 1428.95 576.5 1427.35 578.1 1424.3 577.7 1425.8 581.3 1426.05 584.65 1426.4 589.8 1423.6 591.4 1420.85 593 1416.55 590.1 L1414 588 1413.65 591.3 Q1412.65 596.4 1409.55 597.2 1406.5 598.05 1403.1 594.15 L1401.15 591.5 1399.95 594.55 Q1397.7 599.2 1394.5 599.2 1391.3 599.2 1389.05 594.55 1387.95 592.4 1387.4 589.8 L1386.3 591.15 Q1382.9 595.1 1379.8 594.25 1376.75 593.45 1375.75 588.35 L1375.6 587.4 1372.35 590.1 Q1368.1 593 1365.3 591.4 1362.55 589.8 1362.9 584.65 1363.1 581.7 1364.3 578.55 1360.35 579.55 1358.4 577.6 1356.2 575.4 1357.75 570.7 1354.1 572.2 1350.7 572.45 1345.55 572.8 1343.95 570.05 1342.35 567.3 1345.25 563 1346.15 561.65 1347.35 560.4 L1344.05 560.05 Q1338.95 559.05 1338.15 556 1337.3 552.9 1341.2 549.5 1344.25 546.85 1348.85 545.2 1346.15 543.3 1346.15 540.9 1346.15 538.5 1348.8 536.6 1343.65 534.95 1340.3 532 1336.4 528.6 1337.2 525.55 1338.05 522.45 1343.1 521.45 1347.25 520.7 1352.2 521.65 1350.3 518.2 1351.65 515.8 1353.05 513.35 1357.3 513.35 1354.7 510.1 1353.55 506.75 1351.9 501.9 1354.15 499.6 1356.4 497.35 1361.3 499.05 L1363.3 499.85 1362.9 497.1 Q1362.55 491.95 1365.3 490.35 1368.05 488.75 1372.35 491.65 1374.15 492.9 1375.8 494.6 1376.8 489.75 1379.8 488.95"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1417.3 507.8 Q1419.25 509.2 1418.6 513.05 L1418.4 514.05 Q1420.55 512.8 1422.75 512.3 1426.5 511.4 1428.05 513.25 1429.55 515.1 1427.95 518.65 L1425.85 522 1427.65 521.95 Q1431.5 522.05 1432.5 524.2 1433.5 526.4 1431.05 529.4 L1429.3 531.2 1429.4 531.2 Q1433.15 532.35 1433.55 534.7 1433.85 536.55 1431.95 538.35 1436.3 538.9 1439.3 540.75 1442.6 542.75 1442.4 545.15 1442.15 547.55 1438.55 548.9 1435.6 550 1431.8 549.9 L1433.45 551.4 Q1436.15 554.2 1435.3 556.45 1434.45 558.7 1430.6 559.1 L1428.1 559.15 1429.5 561.2 Q1431.35 564.65 1429.95 566.6 1428.55 568.55 1424.7 567.9 L1421.05 566.8 1421.2 567.35 Q1422.1 571.15 1420.25 572.65 1418.4 574.2 1414.85 572.6 L1414.35 572.35 Q1414.8 574.3 1414.75 576.15 1414.65 580.05 1412.45 581.05 1410.25 582.05 1407.25 579.55 L1405.95 578.35 Q1406 581 1405.3 583.25 1404.25 587 1401.85 587.35 1399.5 587.8 1397.25 584.6 1395 581.45 1394.15 576.6 L1394.05 575.8 Q1392.2 578.4 1390.1 578.2 1388.4 578.05 1387.2 576.05 1385.8 578.65 1383.95 580.4 1381.15 583.05 1378.9 582.2 1376.65 581.4 1376.25 577.55 L1376.25 575.05 1374.15 576.4 Q1370.75 578.25 1368.8 576.85 1366.85 575.5 1367.5 571.65 L1368.1 569.25 1365.75 570.05 Q1361.95 570.95 1360.4 569.1 1358.9 567.25 1360.5 563.7 1361.25 562.05 1362.5 560.45 L1361.15 560.5 Q1357.25 560.4 1356.25 558.2 1355.3 556.05 1357.75 553.05 L1358.25 552.5 1355.1 551.9 Q1351.4 550.8 1351 548.45 1350.6 546.05 1353.75 543.8 1355.55 542.5 1357.95 541.7 1355.5 539.9 1355.7 537.8 1355.9 535.5 1359.35 534.15 1356.75 532.75 1355 530.9 1352.3 528.1 1353.15 525.85 1353.95 523.6 1357.85 523.2 L1360.35 523.2 1358.95 521.1 Q1357.1 517.7 1358.5 515.75 1359.9 513.8 1363.75 514.4 1366.75 514.9 1369.85 516.8 1369.7 514.35 1371.1 513.15 1372.5 512 1374.85 512.65 1373.35 508.85 1373.45 505.5 1373.5 501.65 1375.7 500.65 1377.9 499.65 1380.9 502.1 1383.3 504.1 1385.15 507.45 1386.2 504.7 1388.25 504.35 1390.35 504 1392.35 506.45 1393 503.4 1394.4 501.1 1396.45 497.8 1398.85 498.05 1401.2 498.25 1402.6 501.9 L1403.05 503.45 1404.45 501.9 Q1407.3 499.25 1409.55 500.05 1411.8 500.9 1412.15 504.8 L1412.1 508.2 Q1415.4 506.45 1417.3 507.8"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1507.85 589.3 Q1507.55 593.1 1508.7 597.15 1509.55 600 1511.05 602.95 L1511.2 603.25 1511.2 603.4 1507.55 603.4 Q1504.65 597.35 1504.65 591 L1505.05 585.95 Q1505.6 582.6 1506.95 579.3 L1509.2 574.7 Q1512.25 569.25 1516.5 564.6 L1521.65 559.45 1522.25 558.9 1526.1 555.15 1526.8 554.4 Q1532 548.95 1535.3 543 L1537.3 539 1538.45 536 Q1540.4 530.55 1540.75 524.65 L1540.8 520.35 Q1540.65 516.55 1539.9 512.75 1538.65 507 1536 501.75 L1530.65 493.7 1529.3 492.2 Q1528.35 491.65 1527.5 491.25 1524.75 489.95 1521.55 489.25 L1519 488.6 Q1517.3 488 1516.6 487.15 L1516.6 487.2 Q1515.35 485.75 1515.25 484.25 1515.15 482.6 1516.5 481.4 1517.4 480.6 1518.6 480.4 L1520.9 480.6 Q1525.85 482.05 1530.5 488.4 L1531.2 489.4 1531.6 489.75 1532.4 490.6 1536.8 496.5 Q1538.65 499.4 1540.1 502.7 L1540.65 503.95 Q1542.05 507.15 1542.8 510.35 L1543.3 512.55 1544.2 519.1 Q1544.75 527.75 1541.85 536.4 L1540.4 540.25 Q1539.15 543.8 1537.2 546.4 L1534.7 550.25 Q1533.05 552.75 1531 554.8 L1527.6 558.45 1527.55 558.45 1522.25 563.75 1522.25 563.7 1517.9 568.35 Q1515.15 571.2 1513.1 574.75 L1512.8 575.2 Q1510.8 578.55 1509.6 581.65 1508.25 585.15 1507.9 588.5 L1507.85 589.3"
        />
        <path
          stroke="none"
          fill="url(#gradient140)"
          d="M1506.95 579.3 L1506.9 578.9 Q1505.85 574 1501.35 570.4 1500.1 569.4 1499.7 568 1499.3 566.75 1499.65 565.95 1500.25 564.4 1501.6 563.85 L1504.45 563.95 1505.8 565.05 1506.7 566.4 1506.7 566.45 1507.4 568 1508 569.55 Q1508.95 572.2 1509.2 574.7 L1506.95 579.3"
        />
        <path
          stroke="none"
          fill="url(#gradient141)"
          d="M1517.9 568.35 L1518.3 568.05 Q1520.1 566.65 1522.1 565.5 1523.95 564.5 1526 563.95 L1527.95 563.6 1530 563.85 Q1531.85 564.5 1532.45 566.15 1533.05 567.75 1532.25 569.6 1531.85 570.6 1530.55 571.4 1528.95 572.45 1527.05 572.3 1520.5 571.85 1515 573.95 L1514.95 573.95 1513.1 574.75 Q1515.15 571.2 1517.9 568.35"
        />
        <path
          stroke="none"
          fill="url(#gradient142)"
          d="M1532.4 490.6 Q1532.1 489 1532.1 487.4 1532.15 485.3 1532.7 483.35 L1533.3 481.4 Q1533.75 480.15 1534.4 479.5 1535.45 478.4 1537 478.35 1538.55 478.3 1539.7 479.4 1540.75 480.45 1540.85 481.95 1540.9 483.45 1539.9 484.6 1536.4 490 1536.65 495.1 L1536.8 496.5 1532.4 490.6"
        />
        <path
          stroke="none"
          fill="url(#gradient143)"
          d="M1540.65 503.95 L1540.7 503.15 Q1540.8 500.9 1541.2 498.65 L1541.2 498.6 Q1541.65 496.6 1542.55 494.65 L1543.5 492.95 Q1544.2 492.05 1545.05 491.55 1546.75 490.55 1548.4 491.15 1550.05 491.75 1550.9 493.55 1551.35 494.5 1551.2 496 1550.95 497.85 1549.6 499.25 1545 503.95 1543.05 509.5 L1542.8 510.35 Q1542.05 507.15 1540.65 503.95"
        />
        <path
          stroke="none"
          fill="url(#gradient144)"
          d="M1536 501.75 L1533.85 500.65 Q1531.95 499.8 1529.7 499.45 L1527.95 499.05 Q1526.7 498.65 1526.15 498.1 L1526.15 498.05 Q1525.2 497.05 1525.15 496 1525 494.75 1526 493.85 1526.6 493.25 1527.5 493.05 L1529.2 493.15 1530.65 493.7 1536 501.75"
        />
        <path
          stroke="none"
          fill="url(#gradient145)"
          d="M1540.75 524.65 L1539.7 523.55 Q1535.8 520.2 1529.4 519.6 L1529.35 519.6 Q1527.9 519.65 1526.8 518.7 1525.7 517.75 1525.5 516.25 L1525.55 516.25 Q1525.35 514.7 1526.35 513.5 1527.3 512.3 1528.85 512.15 L1531.05 512.45 1531.1 512.45 1533.05 513.2 Q1535.7 514.35 1537.85 516.5 L1537.9 516.5 Q1539.55 518.15 1540.8 520.35 L1540.75 524.65"
        />
        <path
          stroke="none"
          fill="url(#gradient146)"
          d="M1543.3 512.55 L1543.8 510.75 1543.8 510.7 Q1544.35 509.25 1545.2 507.95 L1546.15 506.75 1547.4 505.9 1547.45 505.9 1550 505.95 Q1551.2 506.55 1551.65 508.05 1551.9 508.8 1551.6 509.95 1551.2 511.3 1550.1 512.2 1546.25 515.1 1544.25 518.95 L1544.2 519.1 1543.3 512.55"
        />
        <path
          stroke="none"
          fill="url(#gradient147)"
          d="M1540.4 540.25 L1541.7 538.9 1545.1 535.9 Q1546.8 534.65 1548.75 533.85 1549.8 533.4 1550.65 533.2 1551.75 533 1552.7 533.2 1554.6 533.6 1555.45 535.2 1556.25 536.7 1555.7 538.6 1555.45 539.65 1554.25 540.65 1552.85 541.85 1550.95 542 1544.35 542.4 1539.15 545.2 L1537.2 546.4 Q1539.15 543.8 1540.4 540.25"
        />
        <path
          stroke="none"
          fill="url(#gradient148)"
          d="M1535.3 543 L1535.15 542.2 Q1534.45 538.3 1531 535.45 L1530.95 535.45 Q1529.95 534.6 1529.65 533.45 1529.35 532.4 1529.6 531.8 L1529.65 531.75 Q1530.15 530.5 1531.25 530.05 L1533.6 530.2 Q1534.2 530.5 1534.7 531.1 L1535.4 532.25 1535.95 533.5 1536.4 534.75 Q1537.15 536.95 1537.3 539 L1535.3 543"
        />
        <path
          stroke="none"
          fill="url(#gradient149)"
          d="M1522.25 558.9 L1522.25 558.75 1522 554.4 Q1521.6 551.35 1520.4 548.25 L1519.55 545.8 Q1519.1 544.05 1519.4 543 1519.9 541.2 1521.1 540.3 1522.45 539.3 1524.2 539.8 1525.35 540.1 1526.2 540.95 1527.05 541.8 1527.3 543 1528.75 547.85 1526.1 555.15 L1522.25 558.9"
        />
        <path
          stroke="none"
          fill="url(#gradient150)"
          d="M1534.7 550.25 Q1535.65 549.8 1536.65 549.45 L1539.7 548.8 1539.65 548.85 1541.2 548.8 Q1542 548.9 1542.65 549.3 L1542.65 549.25 Q1544 550 1544.2 551.4 1544.45 552.65 1543.6 553.95 L1543.6 553.9 Q1543.2 554.6 1542.1 555.05 L1539.35 555.3 Q1535 554.15 1531 554.8 1533.05 552.75 1534.7 550.25"
        />
        <path
          stroke="none"
          fill="url(#gradient151)"
          d="M1504.65 591 L1503.6 589.35 Q1500 584.35 1493.15 582.55 1491.3 582.05 1490.15 580.75 1489.1 579.6 1489.1 578.6 1489.05 576.6 1490.2 575.35 1491.4 574 1493.35 574.1 1494.3 574.1 1495.35 574.6 1496.1 574.95 1497 575.7 L1498.6 577.05 1500 578.5 1500 578.55 Q1503.45 582.05 1505.05 585.95 L1504.65 591"
        />
        <path
          stroke="none"
          fill="url(#gradient152)"
          d="M1507.85 589.3 L1508.35 588.05 1508.9 586.85 1509.65 585.75 1510.75 584.9 1513.05 584.85 Q1514.1 585.3 1514.6 586.55 1514.9 587.2 1514.55 588.25 1514.15 589.35 1513.2 590.15 1509.65 592.85 1508.8 596.65 L1508.7 597.15 Q1507.55 593.1 1507.85 589.3"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1630.65 526.6 Q1635.95 534.8 1641.85 542.15 L1641.85 500.3 Q1637.95 499.25 1638.05 492.4 1639.05 482.1 1643.55 478.45 1648 482.1 1649.05 492.4 1649.15 499.55 1644.85 500.35 L1644.85 535.45 Q1651.15 526.2 1655.75 514 1652.05 512.45 1653 505.75 1655.3 495.65 1660.15 492.6 1664.15 496.75 1663.9 507.1 1663.15 514.25 1658.75 514.5 L1656.35 520.5 1651.65 530.1 Q1648.5 535.75 1644.85 540.6 L1644.85 555.55 1654.1 543 Q1656.3 538.4 1659.1 536.2 L1663.05 530.9 Q1661.85 528.8 1664.45 525.4 1669.25 520.25 1673.2 520.1 1674.1 523.9 1670.45 529.9 1667.8 533.55 1665.4 532.75 L1662.1 537.2 Q1664.1 541.75 1663 549.9 1661.45 557.1 1656.9 556.7 L1655.55 561.65 1653.1 570.15 Q1649.25 582.85 1644.85 594.1 L1644.85 596 Q1650.5 592.75 1655.65 589.1 1659.55 586.45 1662.55 583.8 1672.25 575.8 1679.8 566.2 1678.35 563.15 1682 558.45 1689.1 550.9 1694.85 550.7 1696.2 556.3 1690.8 565.1 1686.1 571.5 1681.85 568.45 L1678.4 572.6 Q1675.45 576.65 1671.35 580 1666.35 584.8 1660.7 589.05 L1659.7 589.85 Q1652.75 595 1644.85 599.45 L1644.85 603.3 1641.85 603.3 1641.85 597.05 1641.85 589.35 1641.85 585.15 Q1632.8 579.65 1626.45 573.85 1622.6 570.85 1619.9 566.95 1617.55 563.95 1615.85 560.9 1611.85 563.3 1607.35 557.4 1601.85 548.65 1603.1 543 1607.95 543.1 1613.75 548.4 1616 541.1 1620 538.6 1624 542.75 1623.75 553.1 1623.05 559.8 1619.1 560.45 1625.7 571.55 1641.85 581.65 L1641.85 562.6 1641.85 554.5 1641.85 546.85 Q1633.5 536.9 1626.25 525.25 1625.55 524.5 1625.15 523.45 L1625.1 523.35 1621.35 516.95 1617.4 509.5 Q1612.75 511.05 1609.85 504 1606.8 494.1 1609.5 489 1615 490.6 1620 499.7 1622.55 505.5 1620 508.05 L1625 517.3 1630.65 526.6 M1644.85 560.55 L1644.85 585.6 Q1649.8 571.75 1654.05 555.85 1651.8 554.5 1651.8 551.15 L1644.85 560.55"
        />
        <path
          stroke="none"
          fill="url(#gradient153)"
          d="M1656.35 520.5 Q1658.95 518.7 1661.25 518.6 1662.15 522.4 1658.5 528.4 1655.2 532.95 1652.2 530.55 L1651.65 530.1 1656.35 520.5"
        />
        <path
          stroke="none"
          fill="url(#gradient154)"
          d="M1625 517.3 Q1627.3 507.7 1632.05 504.7 1636.05 508.85 1635.8 519.2 1635 526.35 1630.65 526.6 L1625 517.3"
        />
        <path
          stroke="none"
          fill="url(#gradient155)"
          d="M1625.1 523.35 Q1623.5 525.95 1618.95 524 1612.7 520.75 1611.55 516.95 1614.9 515.15 1621.35 516.95 L1625.1 523.35"
        />
        <path
          stroke="none"
          fill="url(#gradient156)"
          d="M1626.45 573.85 Q1624.85 576.55 1620.25 574.6 1614 571.35 1612.85 567.55 1615.45 566.15 1619.9 566.95 1622.6 570.85 1626.45 573.85"
        />
        <path
          stroke="none"
          fill="url(#gradient157)"
          d="M1641.85 562.6 Q1638.9 563.95 1636.35 559.5 1633.4 553.1 1634.75 549.4 1638.2 549.95 1641.85 554.5 L1641.85 562.6"
        />
        <path
          stroke="none"
          fill="url(#gradient158)"
          d="M1655.55 561.65 Q1659.8 558.65 1663.05 558.95 1663.45 562.85 1659.05 568.3 1655.6 571.95 1653.1 570.15 L1655.55 561.65"
        />
        <path
          stroke="none"
          fill="url(#gradient159)"
          d="M1678.4 572.6 Q1681.95 571.65 1684.35 572.55 1683.75 576.4 1678.05 580.55 1673.3 583.5 1671.45 580.15 L1671.35 580 Q1675.45 576.65 1678.4 572.6"
        />
        <path
          stroke="none"
          fill="url(#gradient160)"
          d="M1655.65 589.1 Q1654 587.55 1655.1 583.7 1657.5 577.1 1661.1 575.45 1663.1 578.2 1662.55 583.8 1659.55 586.45 1655.65 589.1"
        />
        <path
          stroke="none"
          fill="url(#gradient161)"
          d="M1641.85 597.05 Q1639.7 597.75 1636.8 594.85 1632.3 589.4 1632.65 585.5 1636.5 585.1 1641.85 589.35 L1641.85 597.05"
        />
        <path
          stroke="none"
          fill="url(#gradient162)"
          d="M1760.2 589.15 Q1755.45 586.05 1751.95 581.1 1746.65 584.9 1742.85 579.4 L1745.4 578.65 Q1741.2 577.6 1739.65 572.35 L1744.5 573.7 Q1740.7 571.7 1740.6 566.9 L1744.35 568.25 Q1741.95 563.15 1743.65 559.8 1747.25 560.8 1749.55 565.85 L1750.95 562.15 Q1754.55 565.4 1753.6 569.6 L1755.7 565.05 Q1758.65 569.65 1756.75 573.45 L1758.9 572 Q1760.35 577.65 1755.8 579.55 1760.8 586.15 1768.55 588.7 1767.3 587.35 1767.2 584.8 L1769.95 586.45 Q1767.95 584.55 1768.7 581.65 L1770.75 583.05 Q1770.15 579.6 1771.7 577.8 1773.75 579 1774.3 582.45 L1775.15 581.3 1775.15 569.3 1775.15 567.1 1775.15 562.05 Q1766.7 557.55 1759.5 551.55 L1756.3 548.7 1755.1 547.6 1754.9 547.6 1754.6 547.65 Q1744.8 548.8 1735.8 546.15 1734.25 550.8 1728.55 549.8 L1729.85 547.5 Q1726.15 549.7 1721.35 547.1 L1725.7 544.6 Q1721.6 545.9 1718.15 542.55 L1721.75 540.85 Q1716.45 538.95 1715.25 535.35 1718.5 533.5 1723.7 535.5 L1722.1 531.9 Q1726.9 531.65 1729.2 535.3 L1727.5 530.55 Q1732.85 531.7 1734.2 535.8 L1734.7 533.2 Q1740.55 536.7 1737 542.3 L1742.7 543.55 1745.25 543.8 1748.7 543.95 1748.2 542.1 1750.1 542.4 Q1745.3 537 1741.2 530.75 L1739.35 527.75 1738.8 526.85 Q1733.05 531.05 1729.3 525.15 L1731.85 524.55 Q1727.75 523.3 1726.4 518 L1731.2 519.55 Q1727.45 517.4 1727.55 512.55 L1731.25 514.05 Q1729.1 508.9 1730.9 505.6 1734.45 506.7 1736.55 511.9 L1738.1 508.25 Q1741.55 511.65 1740.4 515.8 L1742.75 511.35 Q1745.5 516.05 1743.4 519.8 L1745.65 518.45 Q1746.8 523.8 1742.75 525.6 1745.95 530.9 1749.65 535.55 L1752.15 537.7 Q1749.5 534.25 1751.5 529.85 L1754.3 532.65 Q1754.3 527.05 1757.25 524.7 1760.1 527.1 1760 532.7 L1762.85 529.95 Q1764.75 534.4 1762.1 537.8 L1766 534.6 Q1766.65 540 1763.3 542.65 L1765.9 542.25 Q1765 547.15 1761.2 547.7 1767.65 553.25 1775.15 557.45 L1775.15 526.8 Q1769.45 522.25 1765.7 516.7 1764.15 515.95 1763.8 513.65 1760.7 508.1 1759.4 501.65 1753.5 503.05 1751.85 496.8 L1754.45 497 Q1750.9 494.6 1751.25 489.15 L1755.35 492.05 Q1752.45 488.85 1754 484.35 L1757.05 486.85 Q1756.55 481.3 1759.3 478.7 1762.35 480.85 1762.75 486.4 L1765.35 483.4 Q1767.6 487.65 1765.3 491.3 L1768.85 487.75 Q1770.05 493.05 1766.95 496 L1769.45 495.4 Q1768.9 501.5 1763.45 501.4 1764.3 505.1 1765.75 508.45 1765.7 507.1 1766.5 505.7 L1768.1 507.6 Q1768.4 504.05 1770.4 502.75 1772.05 504.45 1771.7 507.9 L1773.65 506.35 Q1774.6 509.25 1772.75 511.25 L1775.35 509.45 Q1775.5 512.85 1773.25 514.35 L1774.9 514.25 Q1774 517.5 1771.3 517.45 1773.75 520.35 1776.8 522.95 L1779.2 526.55 1779.2 529.75 1779.2 532.45 1779.2 537 Q1789.4 530.4 1797.35 519.1 L1797.4 519 Q1802.15 512.25 1806.1 503.8 1800.7 502.2 1802.1 496.1 L1804.35 497.5 Q1802.35 493.75 1805.15 489.05 L1807.45 493.55 Q1806.35 489.35 1809.9 486.1 L1811.4 489.75 Q1813.55 484.6 1817.2 483.55 1818.9 486.9 1816.65 492 L1820.35 490.6 Q1820.35 495.4 1816.55 497.5 L1821.4 496.05 Q1819.95 501.3 1815.8 502.45 L1818.35 503.1 Q1814.85 508.45 1809.85 505.35 1806.65 512.2 1802.95 517.95 L1799.15 523.45 1799.05 523.65 Q1795.5 528.3 1791.6 532.15 L1788.5 535.05 Q1784.05 538.9 1779.2 541.75 L1779.2 546.95 1780.6 545.85 1780.55 549.05 Q1781.15 546.4 1784.05 545.55 L1783.85 548.05 Q1786.55 545.8 1788.9 546.25 1788.9 548.6 1786.15 550.85 L1788.65 551.1 Q1787.3 553.8 1784.55 553.9 L1787.65 554.45 Q1785.35 557 1782.7 556.45 L1783.95 557.55 Q1781 559.2 1779.2 557.3 L1779.2 560.7 1779.2 561 1779.2 572.8 Q1784.4 569 1788.95 563.25 L1788.95 563.2 1789 563.2 1789.05 563.1 Q1793 558.1 1796.4 551.7 1790.95 549.5 1793.1 543.5 L1795.15 545.15 Q1793.6 541.2 1796.95 536.85 L1798.7 541.6 Q1798.15 537.3 1802 534.45 L1803.1 538.3 Q1805.8 533.45 1809.55 532.85 1810.85 536.35 1808 541.15 L1811.85 540.15 Q1811.3 544.95 1807.3 546.6 L1812.25 545.7 1810.9 548.25 1810.3 551.65 Q1811.95 547.65 1816.75 547.15 L1815.75 551 Q1820.55 548.15 1824.1 549.5 1823.45 553.15 1818.6 555.9 L1822.4 557 Q1819.55 560.85 1815.25 560.3 L1820 562 Q1815.7 565.35 1811.7 563.8 L1813.35 565.85 Q1807.5 567.95 1805.3 562.85 L1803.3 559.3 Q1801.5 557 1801.75 554.8 L1799.9 553.75 Q1797.4 558.35 1794.7 562.25 L1791.55 566.45 1787.8 570.65 1785.15 573.15 Q1782.25 575.75 1779.2 577.7 L1779.2 584.85 1779.2 587.95 1779.2 603.1 1775.15 603.1 1775.15 601.6 1775.15 599.45 1775.15 594.2 Q1768.9 593.55 1763.85 591.2 L1760.2 589.15 M1817.7 513.6 Q1814.85 508.55 1820.25 505.2 L1820.8 507.8 Q1822.05 503.7 1827.35 502.35 L1825.8 507.15 Q1828 503.45 1832.8 503.6 L1831.3 507.3 Q1836.45 505.15 1839.75 507 1838.6 510.55 1833.4 512.55 L1837 514.2 Q1833.6 517.6 1829.45 516.45 L1833.9 518.8 Q1829.15 521.5 1825.4 519.4 L1826.75 521.65 Q1820.6 522.9 1819.2 517.35 L1817.7 513.6 M1783.1 509 Q1777.3 508.25 1777.9 501.9 L1780.3 503 Q1777.8 499.5 1779.95 494.5 L1782.8 498.65 Q1781.2 494.65 1784.25 490.95 L1786.25 494.35 Q1787.7 489 1791.15 487.45 1793.25 490.55 1791.7 495.9 L1795.2 494 Q1795.85 498.75 1792.4 501.35 L1796.95 499.25 Q1796.25 504.65 1792.3 506.35 L1794.9 506.65 Q1792.2 512.3 1787 510.15 L1783.1 509"
        />
        <path
          stroke="none"
          fill="url(#gradient163)"
          d="M1799.15 523.45 L1802.95 517.95 Q1810.55 517.15 1817.7 513.6 L1819.2 517.35 1813.85 519.6 1810.35 520.7 Q1805.3 522.05 1800.1 522.2 L1799.15 523.45"
        />
        <path
          stroke="none"
          fill="url(#gradient164)"
          d="M1788.5 535.05 L1791.6 532.15 Q1803.05 528.75 1810.35 520.7 L1813.85 519.6 Q1804.8 531.4 1788.5 535.05"
        />
        <path
          stroke="none"
          fill="url(#gradient165)"
          d="M1779.2 526.55 L1776.8 522.95 Q1780.9 517.15 1783.1 509 L1787 510.15 1786.05 513.25 1784.9 516.4 Q1782.6 522.15 1779.2 526.55"
        />
        <path
          stroke="none"
          fill="url(#gradient166)"
          d="M1779.2 532.45 L1779.2 529.75 Q1786.15 523.1 1784.9 516.4 L1786.05 513.25 Q1790.25 522.95 1779.2 532.45"
        />
        <path
          stroke="none"
          fill="url(#gradient167)"
          d="M1756.3 548.7 L1759.5 551.55 Q1764.25 562.45 1775.15 567.1 L1775.15 569.3 Q1761.1 563.7 1756.3 548.7"
        />
        <path
          stroke="none"
          fill="url(#gradient168)"
          d="M1791.55 566.45 L1794.7 562.25 Q1799.5 561.65 1803.3 559.3 L1805.3 562.85 Q1799.4 566.45 1791.55 566.45"
        />
        <path
          stroke="none"
          fill="url(#gradient169)"
          d="M1739.35 527.75 L1741.2 530.75 Q1741.25 537.9 1745.25 543.8 L1742.7 543.55 Q1738.5 536.45 1739.35 527.75"
        />
        <path
          stroke="none"
          fill="url(#gradient170)"
          d="M1779.2 587.95 L1779.2 584.85 Q1783.3 579.65 1785.15 573.15 L1787.8 570.65 Q1785.85 580.65 1779.2 587.95"
        />
        <path
          stroke="none"
          fill="url(#gradient171)"
          d="M1760.2 589.15 L1763.85 591.2 Q1767.55 595.95 1775.15 599.45 L1775.15 601.6 Q1763.8 596.7 1760.2 589.15"
        />
        <path
          stroke="none"
          fill="url(#gradient172)"
          d="M1909 506.5 L1908.6 506.2 Q1907.5 505.25 1907.1 503.7 1906.1 497.4 1908.15 494.55 1909.7 495.25 1911 496.95 1912.3 495.25 1913.85 494.55 1915.4 496.7 1915.2 500.8 L1909 506.5"
        />
        <path
          stroke="none"
          fill="#FFFFFF"
          d="M1909 506.5 L1915.2 500.8 1919.3 496.15 Q1918.7 494.95 1918.6 493.3 1918.45 491 1919.8 488.7 1925.9 480.25 1931.6 479.3 1932.6 481.9 1932.15 485.4 1935.65 484.95 1938.25 485.9 1937.3 491.65 1928.85 497.75 1926.55 499.1 1924.1 498.95 L1922.45 498.65 1920.1 501.45 1916.9 504.8 Q1912.95 508.7 1908.2 512.15 L1918.6 523.55 1924.4 529.9 1927.85 533.7 1927.9 533.8 Q1929.75 536.3 1930.1 538.95 L1928.6 545.8 1926.65 548.55 1926.5 548.7 1914.4 560.1 Q1923 558.15 1933.9 552.1 L1941.85 547.15 Q1947.2 543.05 1949.65 536.95 1948.6 536.2 1947.7 534.9 1946.4 533 1946.45 530.3 1947.5 519.95 1952 516.3 1954.1 518 1955.5 521.3 1958.3 519.15 1961 518.7 1963.1 524.15 1958.8 533.65 1957.5 535.95 1955.3 537.05 L1953.7 537.65 Q1952.45 540.95 1950.5 543.8 L1956.2 541.25 1956.35 540.95 Q1957 539.6 1958.4 538.8 1964.2 536.2 1967.5 537.45 1967.25 539.1 1965.9 540.8 1967.9 541.65 1968.95 542.95 1966.75 545.7 1960.4 546.35 1958.8 546.35 1957.65 545.55 L1957.15 545.2 1941.35 552.35 Q1935.45 555.95 1930.15 558.55 L1924.4 561.1 Q1916.05 564.5 1909.25 564.95 L1903.2 570.65 1900.65 573.05 1896.1 577.35 Q1894.95 578.55 1894.4 579.8 1894.35 580.8 1893.9 581.45 1893.5 584.2 1895.7 587.4 L1901.25 594.8 1906.9 602.45 1901.95 602.45 1893.8 591.45 Q1888.95 585.8 1889.65 580.95 1890.7 577.75 1892.75 575.05 L1893.3 574.5 1897.6 570.45 1875.15 551.5 Q1865.95 551.45 1857.15 549.65 L1856.5 550.15 Q1855.35 550.95 1853.75 550.9 1847.4 550.3 1845.2 547.55 1846.25 546.25 1848.25 545.4 1846.9 543.7 1846.65 542.05 1849.95 540.8 1855.75 543.4 1857.15 544.2 1857.8 545.5 L1857.9 545.75 Q1863.95 546.95 1870.25 547.35 L1859.4 538.15 1857.05 538.65 Q1854.75 538.8 1852.45 537.45 1844 531.35 1843.05 525.65 1845.65 524.65 1849.15 525.1 1848.7 521.6 1849.7 519 1855.4 519.95 1861.5 528.4 1862.9 530.7 1862.7 533.15 L1862.25 535.35 1867.55 539.8 1873.1 544.5 1878.7 549.25 1881.25 551.4 1883.7 553.45 1896.25 564.1 1900.5 567.7 1912.95 556 1919.75 549.6 1923.7 545.85 Q1927.8 540.85 1924.7 536.2 L1920 531.05 1912.65 531.15 1904 530.75 1903.8 530.75 1892.55 529.3 Q1891.85 530.6 1890.25 531.65 1888.35 532.95 1885.7 532.9 1875.3 531.85 1871.65 527.35 1873.4 525.25 1876.65 523.85 1874.5 521.05 1874.05 518.35 1879.5 516.25 1889 520.55 1891.35 521.85 1892.4 524.05 L1892.9 525.3 1897.25 526 1904.45 526.8 1916.45 527.15 1903.75 513.2 1903.7 513.15 1900.3 509.65 1897.85 507.2 1893.35 502.6 1891.55 502.9 Q1889.25 503.05 1886.95 501.7 1878.5 495.6 1877.55 489.9 1880.15 488.9 1883.65 489.35 1883.2 485.85 1884.15 483.25 1889.9 484.2 1896 492.65 1897.35 494.95 1897.2 497.4 1897.1 499 1896.5 500.1 L1905.45 509.25 1909 506.5"
        />
        <path
          stroke="none"
          fill="url(#gradient173)"
          d="M1900.3 509.65 L1886 507.1 1875.95 512.6 1875 510.85 1882.85 506.5 1875.55 505.2 1875.9 503.25 1885.95 505.05 1886 505.05 1897.85 507.2 1900.3 509.65"
        />
        <path
          stroke="none"
          fill="url(#gradient174)"
          d="M1897.25 526 Q1894.1 521.7 1894.4 518.55 1896.1 518.4 1898.05 519.25 1898.35 517.05 1899.35 515.7 1902.55 517.15 1904.8 523.1 1905.25 524.65 1904.8 526 L1904.45 526.8 1897.25 526"
        />
        <path
          stroke="none"
          fill="url(#gradient175)"
          d="M1920.1 501.45 L1920.35 501.4 Q1925.35 501.35 1927.3 503.25 1925.85 505.55 1921 506.65 1917.35 507.15 1916.9 504.8 L1920.1 501.45"
        />
        <path
          stroke="none"
          fill="url(#gradient176)"
          d="M1918.6 523.55 Q1918.5 519.7 1920 517.65 1921.5 518.35 1922.8 520.1 1924.15 518.35 1925.65 517.65 1927.75 520.55 1926.75 526.8 1926.3 528.35 1925.25 529.3 L1924.4 529.9 1918.6 523.55"
        />
        <path
          stroke="none"
          fill="url(#gradient177)"
          d="M1867.55 539.8 Q1867.65 537.6 1868.6 536.3 1871.1 537.45 1872.85 542.1 1873.25 543.55 1873.1 544.5 L1867.55 539.8"
        />
        <path
          stroke="none"
          fill="url(#gradient178)"
          d="M1878.7 549.25 L1875.75 535.95 1877.7 535.5 1881.25 551.4 1878.7 549.25"
        />
        <path
          stroke="none"
          fill="url(#gradient179)"
          d="M1912.65 531.15 Q1912.1 532.2 1910.45 533.1 1905.9 535.15 1903.35 534.15 1903.6 532.55 1905.15 530.85 L1904 530.75 1912.65 531.15"
        />
        <path
          stroke="none"
          fill="url(#gradient180)"
          d="M1912.95 556 Q1911.95 555.05 1911.6 553.65 1910.6 547.35 1912.65 544.5 1914.2 545.15 1915.5 546.9 1916.85 545.15 1918.35 544.5 1919.7 546.35 1919.75 549.6 L1912.95 556"
        />
        <path
          stroke="none"
          fill="url(#gradient181)"
          d="M1883.7 553.45 Q1882.8 550.15 1883.65 547.9 1885.3 548.2 1887 549.55 1887.85 547.5 1889.15 546.45 1891.9 548.7 1892.55 555 1892.5 556.6 1891.75 557.8 L1890.4 559.15 1892.25 560.7 1892.85 560.05 Q1896.7 556.9 1899.4 557.2 1899.7 559.95 1896.55 563.75 L1896.25 564.1 1883.7 553.45"
        />
        <path
          stroke="none"
          fill="url(#gradient182)"
          d="M1903.2 570.65 L1912 569.35 1912.1 569.35 1924.55 567.45 1924.85 569.45 1916.25 570.7 1926.05 574.25 1925.35 576.15 1912.1 571.35 1900.65 573.05 1903.2 570.65"
        />
        <path
          stroke="none"
          fill="url(#gradient183)"
          d="M1930.1 538.95 L1935.1 530.75 1935.1 519.45 1937.1 519.45 1937.1 527.5 1940.85 521.45 1942.55 522.5 1929.65 543.5 1928.6 545.8 1930.1 538.95"
        />
        <path
          stroke="none"
          fill="url(#gradient184)"
          d="M1933.9 552.1 L1933.75 551.85 Q1932.9 550.65 1932.9 549 1933.55 542.65 1936.3 540.45 1937.6 541.5 1938.4 543.5 1940.15 542.2 1941.8 541.95 1942.6 544.05 1941.85 547.15 L1933.9 552.1"
        />
        <path
          stroke="none"
          fill="url(#gradient185)"
          d="M1930.15 558.55 Q1933.6 560.15 1934.55 562.25 1932.3 563.85 1927.4 563.05 1924.95 562.45 1924.4 561.1 L1930.15 558.55"
        />
        <path
          stroke="none"
          fill="url(#gradient186)"
          d="M1889.65 580.95 L1889 579.25 Q1888.2 574.35 1889.8 572.1 1891.45 572.8 1892.75 575.05 1890.7 577.75 1889.65 580.95"
        />
        <path
          stroke="none"
          fill="url(#gradient187)"
          d="M1895.7 587.4 Q1896.05 584.1 1897.55 582.4 1899.05 583.25 1900.15 585.1 1901.65 583.5 1903.2 582.95 1905 586 1903.4 592.15 1902.85 593.65 1901.7 594.5 L1901.25 594.8 1895.7 587.4"
        />
        <path
          stroke="none"
          fill="url(#gradient188)"
          d="M2088.7 548.9 Q2093.55 550.4 2094.85 552.95 2092.65 554.7 2087.6 554.2 2084.15 553.5 2084.15 551.35 L2067.25 547.85 Q2071.1 551.8 2076.5 555.25 2077.6 553.6 2080.75 554.75 2085.4 556.9 2086.4 559.55 2084 561.05 2079 559.9 2075.65 558.8 2075.95 556.65 L2073.3 554.9 Q2073.95 556.3 2073.75 557.45 2071.8 557.5 2069.25 555.15 2067.4 553.1 2068.85 551.85 L2069.15 551.65 2064.75 547.35 2057.55 545.8 2062.65 551.55 Q2064.7 553.05 2065.45 554.65 L2067.65 557.1 Q2068.75 556.7 2070.1 558.3 2072.15 561.1 2071.8 563.05 2069.9 563.1 2067.35 560.75 2065.85 559.1 2066.5 558 L2064.7 556 Q2062.25 556.5 2058.45 555.15 2055.15 553.7 2055.75 551.55 L2053.55 550.4 Q2054.55 552.75 2054.1 554.25 2052.2 554.05 2049.95 551.4 2048.55 549.35 2049.7 548.35 2043.95 545.2 2038.95 541.95 L2038.05 541.75 2038.9 544.25 Q2040.8 545.9 2041.3 547.4 2042 547.45 2042.95 547.95 2045.9 549.8 2046.3 551.7 L2042.15 551.5 2045.5 553.45 Q2046.05 552 2048.45 552.6 2051.75 553.7 2052.6 555.4 2051.45 556.3 2049.2 556.3 L2051.7 558.9 Q2053.45 557.4 2056.1 559.9 2059.5 563.75 2059.35 566.55 2057 566.9 2053.75 564.8 L2053.65 565.4 Q2055.25 568.3 2054.85 570.45 2053.5 570.45 2051.9 569.7 L2051.5 570.1 2050.1 568.55 2048.3 567.05 Q2045.7 564.15 2047.6 562.35 L2045.95 560.3 Q2046.05 562.1 2045.4 563.15 2043.6 562.5 2042.15 559.35 2041.2 556.75 2043 556.15 L2043.1 556.15 2041.05 552.65 2037.35 550.95 2038.9 560.2 Q2040.25 559.3 2041.85 561.25 2043.8 564.1 2043.45 566 2041.75 566.05 2039.55 564.15 L2040.2 567.85 Q2045.05 572 2049.55 577.1 L2050.25 577.85 2050.25 577.9 Q2050.8 576.5 2053.2 577.1 2056.5 578.15 2057.35 579.9 2055.9 581.05 2052.6 580.7 L2055.15 584 Q2057.25 582.9 2059.25 586.05 2061.55 590.65 2060.65 593.35 2057.85 593 2054.65 589 2052.95 586.35 2054 584.9 L2050.8 580.85 Q2050.45 585.7 2048.4 587.5 2046.1 585.85 2045.4 580.8 2045.2 577.25 2047.3 576.75 2044.05 573.2 2040.55 570.15 L2044 590.5 Q2046 590.65 2046.5 594 2046.85 599.1 2044.95 601.25 2042.5 599.8 2041.15 594.9 2040.5 591.4 2042.55 590.7 L2039.65 573.65 Q2037.35 578.65 2036.15 584.95 2038.05 585.4 2038.15 588.7 2037.85 593.8 2035.7 595.7 2033.45 594.05 2032.75 588.95 2032.5 585.4 2034.65 584.95 L2035.3 581.85 Q2034.2 582.95 2033.1 583.15 2032.3 581.4 2033.6 578.15 2034.85 575.7 2036.5 576.6 L2036.8 576.8 Q2037.9 573.8 2039.25 571.15 L2038.05 563.9 2034.55 570.7 Q2033.85 573.15 2032.7 574.4 L2031.2 577.35 Q2031.95 578.25 2030.95 580.1 2029.05 583 2027.15 583.4 2026.4 581.65 2027.7 578.4 2028.65 576.45 2029.9 576.65 L2031.15 574.2 2030.35 572.45 Q2029.3 574.85 2027.8 575.8 2026.15 574.1 2025.95 570.2 2022.65 571.95 2020.35 571.45 2020.4 568.6 2024.1 565.1 2026.7 563 2028.3 564.15 2029.3 560.3 2028.8 555.3 L2028.5 555.5 Q2027.3 554.35 2027.15 551.55 2024.25 554.9 2021.95 558.55 2021.2 560.55 2020.25 561.6 2021.1 562.95 2019.75 565.5 2017 569.6 2014.35 570.25 L2013.55 573.95 2013.3 574.95 2013.3 575 Q2014.75 574.65 2015.65 576.9 2016.7 580.2 2015.8 581.95 2014 581.4 2012.35 578.5 L2011.15 582.5 Q2013.3 583.6 2011.85 587.05 2009.45 591.55 2006.75 592.4 2005.4 589.9 2006.8 585 2007.95 582.1 2009.75 582.1 L2011.2 577.1 Q2007.05 579.65 2004.35 579.05 2004.45 576.25 2008.1 572.7 2010.85 570.5 2012.5 571.9 2013.5 567.2 2014 562.6 L1999.4 577.2 Q2000.4 578.9 1998 581.25 1994.05 584.5 1991.2 584.2 1990.95 581.4 1994.15 577.45 1996.6 574.9 1998.4 576.15 L2010.65 563.9 Q2005.2 564.95 1999.35 567.55 2000.1 569.4 1997.45 571.4 1993.1 574.1 1990.35 573.5 1990.4 570.65 1994.1 567.15 1996.85 564.9 1998.5 566.35 L2001.4 565.1 Q1999.85 564.85 1999.05 564.05 2000.05 562.4 2003.4 561.6 2006.15 561.15 2006.35 563.05 L2006.4 563.4 Q2009.45 562.5 2012.4 562.1 L2016.6 557.95 Q2016.5 557.55 2016.55 557.05 L2015.05 557.3 Q2015.2 559.05 2012.45 560.45 2007.7 562.4 2005.1 561.25 2005.35 560 2006.4 558.7 L2005.9 558.65 2002.7 559.15 Q2002.4 560.3 2000.3 560.55 1996.8 560.7 1995.4 559.35 1996.4 557.7 1999.8 556.9 2001.95 556.55 2002.5 557.7 L2005.2 557.25 Q2006.1 555 2009.35 552.5 2012.4 550.55 2013.8 552.3 L2016 551.05 Q2013.5 550.6 2012.5 549.35 2013.7 547.85 2017.15 547.5 2019.6 547.45 2019.8 548.95 2020.8 548.4 2021.75 547.95 2020.55 547.55 2019.85 546.9 2020.95 545.3 2024.35 544.6 2026.35 544.45 2026.95 545.35 L2029.8 542.3 2025.55 541.45 Q2025.6 542.55 2023.85 543.5 2020.7 544.95 2018.9 544.3 2019.05 543.3 2019.85 542.3 L2017.95 542.55 Q2018.6 543.9 2016.6 545.3 2013.55 547 2011.7 546.5 2011.8 544.9 2013.6 543.05 L2011.1 543.3 Q2010.9 545.55 2007.3 545.75 2003.25 545.6 2001.2 544.25 L1998.75 545.5 Q1998.95 546.7 1997 547.7 1993.75 549 1992 548.25 1992.4 546.35 1995.3 544.45 1997.15 543.45 1998.05 544.2 L2000.95 542.7 2001.15 542.55 Q1999.5 542.1 1998.5 541.15 2000 538.75 2004.95 537.55 2008.05 537.1 2008.95 538.65 L2010.25 538 2009.8 537.2 2009.95 537.1 2004.25 536.15 1998.6 538.6 1998.8 538.9 Q1999.7 540.55 1997.25 541.8 1994 543.05 1992.25 542.3 1992.45 541.2 1993.55 540.1 L1990.45 540.75 Q1989.95 542.9 1986.45 542.7 1981.35 541.95 1979.7 539.7 1981.55 537.55 1986.65 537.25 1990 537.35 1990.45 539.25 1996.75 538 2001.75 535.7 L1984.7 532.85 Q1983.95 534.9 1980.5 534.25 1975.55 532.9 1974.2 530.45 1976.3 528.55 1981.4 528.9 1984.7 529.4 1984.9 531.4 L2005.25 534.8 1998.6 528.1 Q1998.1 530.2 1994.6 530 1989.55 529.25 1987.85 527 1989.7 524.95 1994.55 524.6 L1990.45 521.4 Q1989 522.45 1986.4 520.7 1982.4 517.6 1982.05 514.75 1984.75 513.85 1989.3 516.15 1992.5 518.1 1991.4 520.25 L1994.7 522.8 Q1994.35 519.5 1995.5 518.05 1997.25 518.9 1998.3 522.2 1998.9 524.55 1997.45 525.15 L1997.5 525.15 1998.3 525.85 Q2003.4 530.3 2007.55 535.2 L2011.25 535.8 Q2009.35 533.7 2009.35 531.95 2011.25 531.6 2014.15 533.55 2016.1 535.15 2015.2 536.5 L2024.45 538.05 2022.75 534.35 2019.25 532.3 2019.2 532.4 Q2018.65 534.15 2016.05 533.25 2012.9 531.8 2012.2 530 2013.3 529.35 2015.1 529.45 L2013 527.8 Q2011.25 529.65 2008.35 527.05 L2006.85 525.3 Q2005.9 524.7 2005.3 523.9 L2005.7 523.5 Q2004.9 521.9 2004.95 520.5 2007.1 520.15 2010 521.75 L2010.55 521.65 Q2008.5 518.4 2008.8 516.05 2011.65 515.9 2015.5 519.3 2018 521.95 2016.5 523.7 2017.85 524.8 2019.1 526.15 2019.05 523.95 2020 522.8 2021.7 523.65 2022.8 526.95 2023.4 529.35 2021.95 529.9 L2023.85 533.25 Q2023.05 530.6 2023.7 529.1 2025.6 529.5 2027.45 532.45 L2028 534.1 Q2029.45 534.6 2031.15 536.5 L2033.65 537.35 2033.45 536.45 Q2030.2 531.45 2027.05 525.7 2026.05 526.8 2024 525.4 2021.35 523.2 2021.15 521.3 2022.65 520.85 2025 521.85 L2023.85 519.65 Q2021.7 520.25 2020.25 516.95 2018.9 513.1 2019.4 510.7 L2017.4 508.9 Q2016.3 509.55 2014.65 508.05 2012.3 505.5 2012.35 503.6 2014.25 503.25 2017.1 505.3 2018.7 506.65 2018.35 507.75 L2020.75 509.95 Q2022.35 510.7 2023.85 512.75 L2029.55 517.85 2028.05 510.65 2023.75 506.25 2023.5 506.55 Q2022.3 508 2020.25 506.15 2017.9 503.6 2017.95 501.65 2019.1 501.45 2020.5 502.1 L2018.75 499.45 Q2016.6 499.75 2015.5 496.4 2014.35 491.4 2015.85 489 2018.55 490 2020.65 494.65 2021.75 497.8 2020.15 498.9 2023.6 504.3 2027.55 508.15 L2024.05 491.2 Q2021.9 491.25 2021.2 487.8 2020.7 482.7 2022.45 480.55 2025 481.85 2026.5 486.7 2027.25 489.95 2025.45 490.9 L2029.65 511.1 Q2031.75 506.95 2033.5 502.45 2031.4 502.75 2030.3 499.4 2029.15 494.45 2030.65 492.05 2033.25 493 2035.3 497.4 L2036.8 492.45 Q2035.3 491.45 2035.95 488.4 2037.45 483.5 2039.95 482.2 2041.75 484.35 2041.3 489.45 2040.6 493.15 2038.2 492.9 L2037.05 496.9 Q2039.95 495.35 2041.75 495.9 2041.6 497.8 2038.9 500.05 2036.9 501.45 2035.9 500.35 L2035.85 500.4 2035.5 501.35 Q2033.2 507.7 2030.15 513.35 L2030.9 517.05 Q2032.2 514.5 2033.8 513.85 2034.85 515.5 2034.05 518.9 2033.3 521.3 2031.7 520.95 L2033.65 530.15 Q2036.7 527.2 2038.75 524.4 L2038.75 524.2 Q2037.3 524.6 2036.35 522.35 2035.3 519 2036.25 517.3 2037.65 517.7 2038.9 519.5 L2039.6 516.05 Q2037.35 515.45 2037.85 511.85 2039 506.85 2041.4 505.35 2042.9 506.85 2043.15 510.15 L2043.55 510.75 2044.65 510.25 Q2046.55 508.05 2048.45 507.6 2049.65 510.2 2047.85 514.95 2046.25 518.3 2044.1 517.55 L2042.75 520.85 Q2044.8 520 2046.2 520.45 2046.05 522.35 2043.35 524.6 2041.3 526 2040.3 524.85 2040.5 528.3 2041.4 532.3 L2048.05 525.65 Q2046.55 525.1 2047.25 522.65 2048.4 519.4 2050.2 518.6 2051.2 520 2050.9 522.85 L2053.55 520.2 Q2054.1 513.8 2055.65 507.2 L2055.9 506.2 2055.9 506.15 Q2054.45 506.5 2053.5 504.25 2052.5 500.9 2053.4 499.2 2055.2 499.75 2056.85 502.65 L2058.05 498.65 Q2055.9 497.55 2057.35 494.1 2059.7 489.6 2062.45 488.75 2063.8 491.25 2062.35 496.15 2061.25 499 2059.45 499.05 2058.65 501.55 2058 504 2062.15 501.45 2064.8 502.1 2064.75 504.9 2061.05 508.45 2058.3 510.65 2056.7 509.25 2055.7 513.95 2055.2 518.55 L2069.8 503.95 Q2068.8 502.2 2071.2 499.85 2075.15 496.65 2077.95 496.95 2078.25 499.75 2075.05 503.7 2072.55 506.25 2070.8 505 L2058.55 517.25 Q2064 516.2 2069.85 513.55 2069.1 511.75 2071.75 509.75 2076.1 507 2078.85 507.65 2078.8 510.5 2075.1 514 2072.3 516.25 2070.7 514.8 L2067.8 516.05 Q2069.3 516.3 2070.15 517.1 2069.15 518.75 2065.75 519.55 2063.05 520 2062.85 518.1 L2062.8 517.75 2056.8 519.05 2051.55 524.25 2059.15 523.1 Q2061.55 522.25 2063.25 522.5 L2066.5 522 Q2066.8 520.85 2068.9 520.6 2072.35 520.45 2073.8 521.8 2072.8 523.4 2069.4 524.25 2067.25 524.6 2066.65 523.45 L2064 523.85 Q2063.35 525.45 2061.6 527.15 L2067.8 526.95 Q2067.25 529.25 2064.1 531.55 2067.4 533.35 2068.2 535.55 2065.8 537.05 2060.85 535.9 2057.65 534.9 2057.8 532.9 2054.1 534.2 2050.25 537.2 2049.8 538.7 2047.9 540.25 2054.05 540.85 2060.05 540.15 2060.6 538.55 2063.5 538.2 2068.6 538.05 2070.7 540 2069.2 542.4 2064.25 543.6 2061.65 544 2060.6 542.95 L2059.4 543.9 2059.4 543.95 2058.55 544.4 2058.35 544.5 2062.05 545.25 Q2067.7 542.2 2074.05 539.9 2074.45 539.6 2075 539.55 L2075.05 539.5 Q2074 538.5 2075.35 536.5 2077.55 533.8 2079.5 533.6 2080.05 535.4 2078.5 538.35 L2082.5 537.2 Q2082.25 534.8 2085.95 534.1 2091 533.65 2093.2 535.45 2091.85 537.95 2087 539.45 2083.95 540.05 2082.95 538.6 L2078 540.1 Q2082.4 542.15 2083.35 544.75 2080.95 546.25 2076 545.1 2072.65 544 2072.95 541.9 2068.45 543.6 2064.3 545.7 L2084.5 549.95 Q2085.4 548.15 2088.7 548.9 M2030.05 520.25 L2025.8 516.4 Q2026.1 518.05 2025.15 518.9 2028.8 526.15 2032.6 532.35 L2030.05 520.25 M2025.3 535.6 L2024.95 535.45 2026.15 538.3 2028.2 538.65 Q2027.55 537.5 2027.25 536.5 L2025.85 535.9 2025.3 535.6 M2038.45 531.1 Q2038.75 532.05 2038.45 533.35 L2038.75 535 2040.2 533.55 Q2039.3 529.85 2038.95 526.6 2036.85 529.2 2034 531.85 L2034.4 533.85 2035.55 532.65 Q2036 531.15 2036.9 530.45 L2037.6 531.3 2038.45 531.1 M2042.5 517.6 Q2041.6 517.65 2040.9 517.05 2040.3 519.4 2040.2 522.3 2041.7 519.9 2042.5 517.6 M2016.95 539.05 L2016.9 539.15 2023.75 539.7 2024.4 539.75 2025.4 539.95 2026.1 539.8 2017 538.3 2016.95 539.05 M2032.85 557.45 Q2033.7 550.95 2034.9 545.15 L2034.75 544.2 2034 544.8 2034.1 546 Q2033.8 549.45 2032.3 550.7 2031.25 549.8 2030.75 547.8 L2030.05 548.45 Q2030.95 549.05 2030.75 551.05 L2030.1 553.4 2030.4 556.95 Q2031.25 556.7 2031.9 557.3 L2032.85 557.45 M2049.35 532.2 Q2043.6 535.3 2038.15 537.7 L2037.45 538.35 2038.55 538.65 2039.4 538 Q2042.45 536.35 2044.3 536.95 2044.2 538.2 2043 539.6 L2043.65 539.7 Q2043.6 538.6 2045.35 537.6 2047.15 536.8 2048.55 536.65 L2050.55 535.1 Q2049.8 534.45 2050.15 533.3 2049.45 532.95 2049.35 532.2 M2016 525.25 Q2015.6 526.4 2014.1 526.8 2017.55 529.6 2021.4 531.9 2018.95 527.75 2016 525.25 M2010.9 541.85 L2020.1 540.75 Q2015.05 540.4 2010.2 540.9 L2010.9 541.85 M2017.05 555.05 L2016.1 555.65 2016.9 555.5 2017.05 555.05 M2015.65 560.95 L2015.55 561.9 Q2016.8 560.1 2018.25 560.35 L2018.25 558.9 2017.75 558.85 2015.65 560.95 M2014.55 553.6 Q2014.7 554.25 2014.45 554.9 2019 552.35 2023.1 548.9 2018.9 551.05 2014.55 553.6 M2039.8 550.1 L2039.5 549.55 2038.9 548.15 2036.75 547.2 2037.05 549.25 2039.95 550.45 2039.8 550.1 M2032.1 564.3 L2032.15 563.5 2031.2 562.75 2030 563.45 2029.6 565.1 Q2030 565.2 2030.3 565.45 2030.9 564.4 2032.1 564.3 M2037.6 561.45 L2035.6 549.3 Q2034.3 556.4 2033.55 564.5 2034.75 564.95 2035.05 566.55 L2037.6 561.45 M2055.35 528.85 L2054.8 529.2 2054.95 529.15 2055.1 530.65 Q2056.1 531.05 2056.65 531.7 L2057.85 531.3 Q2057.55 530.35 2058 529.55 2056.35 530 2055.35 528.85 M2052.25 542.1 L2052.25 542 2045.55 541.45 2045.25 541.75 2052.3 543.25 Q2052.05 542.75 2052.25 542.1 M2055.15 545.3 L2043.05 542.8 Q2049.25 546.6 2056.5 550.2 2057.35 549.3 2058.95 549.6 L2055.15 545.3 M2049.85 526 L2041.1 534.7 Q2047.65 531.6 2054.65 527.55 2054.35 526.3 2055.5 525.15 L2049.85 526 M2050.15 559.4 Q2047.65 556.45 2043.5 554 2045.8 557.85 2048.6 561.25 2048.95 559.8 2050.15 559.4"
        />
        <path
          stroke="none"
          fill="url(#gradient189)"
          d="M2163.7 506.45 L2163.65 507.9 Q2166.95 505.1 2166.6 502.05 2165.4 504.6 2163.7 506.45 M2174.65 503.3 Q2178.1 503.15 2181.4 501.75 2180.3 499.4 2182.8 498.05 L2182.95 499.25 Q2183.65 497.45 2186.05 497 L2185.2 499.1 Q2186.3 497.5 2188.5 497.7 L2187.7 499.35 2191.5 499.45 Q2190.9 501 2188.5 501.75 L2190.05 502.6 Q2188.45 504 2186.6 503.4 L2188.5 504.55 Q2186.3 505.65 2184.7 504.6 L2185.25 505.65 Q2182.45 506.05 2181.95 503.5 L2179.5 504.35 Q2175.1 509.4 2167.65 510.55 L2163.25 513.3 2163.15 515.65 Q2163.4 515.4 2163.8 515.2 L2163.7 516.6 Q2164.05 515.45 2165.35 515.15 L2165.2 516.25 Q2166.5 515.3 2167.5 515.6 2167.45 516.65 2166.15 517.55 L2167.25 517.8 Q2166.55 518.95 2165.35 518.9 L2166.7 519.25 Q2165.6 520.35 2164.45 520 L2164.95 520.55 Q2163.6 521.2 2162.85 520.3 L2162.75 521.8 2162.7 521.95 2162.4 527.25 Q2164.8 525.7 2167.05 523.25 L2167.05 523.2 2167.1 523.15 Q2169 521.05 2170.75 518.3 2168.35 517.1 2169.5 514.5 L2170.35 515.3 Q2169.8 513.45 2171.4 511.6 L2172.05 513.8 Q2171.9 511.85 2173.75 510.7 L2174.1 512.45 Q2175.5 510.35 2177.2 510.15 2177.65 511.8 2176.25 513.85 L2178 513.55 Q2177.6 515.65 2175.8 516.3 L2178.05 516.05 2177.35 517.15 2176.95 518.65 Q2177.85 516.9 2180 516.8 L2179.45 518.5 Q2181.65 517.35 2183.2 518.1 2182.85 519.75 2180.55 520.8 L2182.25 521.4 Q2180.85 523.05 2178.95 522.7 L2181.05 523.6 Q2179 524.95 2177.25 524.15 L2177.95 525.15 Q2175.25 525.9 2174.4 523.55 2171.65 525 2168.1 524.75 L2166.3 526.55 Q2165.15 530.95 2161.95 534.05 L2161.55 539.9 2161.7 539.9 Q2164.55 535.1 2168.1 533.9 2169.8 532 2172.2 530.7 2170.8 528.1 2173.45 526.7 L2173.65 527.9 Q2174.35 526.1 2176.8 525.7 L2175.9 527.8 Q2177 526.2 2179.15 526.45 L2178.35 528 2182.15 528.2 Q2181.55 529.75 2179.15 530.5 L2180.7 531.3 Q2179.05 532.75 2177.25 532.05 L2179.15 533.3 Q2176.95 534.35 2175.35 533.25 L2175.85 534.3 Q2173.25 534.65 2172.65 532.5 2169.45 534.35 2167.85 537.7 2168.55 537.2 2169.65 537.3 L2168.8 538.45 Q2169.75 537.65 2171 538.15 L2170.25 539 Q2171.8 538.9 2172.55 539.7 2171.9 540.55 2170.3 540.6 L2170.8 541.05 2176.15 541.75 Q2179.45 535.75 2186.4 534.45 L2186.95 534 2186.95 533.9 2186.95 533.8 Q2187 529.3 2188.7 525.45 2186.7 524.5 2187.5 522 L2188.45 522.7 Q2187.65 520.95 2189.1 518.95 L2189.95 521.05 Q2189.65 519.15 2191.3 517.8 L2191.85 519.45 Q2193 517.2 2194.7 516.9 2195.35 518.45 2194.15 520.65 L2195.85 520.15 Q2195.7 522.3 2193.95 523.15 L2196.15 522.65 Q2195.3 524.95 2193.45 525.35 L2194.55 525.7 Q2192.65 528.1 2190.35 526.2 2189.85 527.4 2189.5 528.7 2192.9 527.2 2196.7 528.1 L2197.15 527.9 Q2195.6 525.1 2198.45 523.75 L2198.6 524.9 Q2199.35 523.15 2201.8 522.85 L2200.8 524.9 Q2202 523.35 2204.15 523.7 L2203.25 525.25 Q2205.7 524.55 2207.05 525.55 2206.4 527.1 2203.95 527.75 L2205.5 528.65 Q2203.8 530 2202 529.25 L2203.85 530.55 Q2201.6 531.5 2200.05 530.35 L2200.55 531.45 Q2198.05 531.65 2197.5 529.75 2194.95 530.85 2192.65 532.25 L2191.55 533.25 2195.1 533.4 2193.7 534.5 Q2196.2 534.8 2197.05 536.25 2195.85 537.4 2193.35 537.05 L2194.4 538.45 Q2192.3 539.05 2190.95 537.7 L2192.15 539.6 Q2189.7 539.6 2188.7 537.95 L2188.75 539.15 Q2186.6 538.45 2186.6 536.7 2183.75 539.3 2181.45 542.4 L2195.1 544.15 Q2197.5 541.85 2200.15 540.5 2200.6 539.85 2201.65 539.8 2204.3 538.75 2207.25 538.5 2206.95 535.8 2209.8 535.4 L2209.6 536.6 Q2210.85 535.15 2213.25 535.6 L2211.75 537.25 2215.25 537.1 2213.95 538.3 Q2216.5 538.4 2217.5 539.8 2216.35 541 2213.85 540.9 L2215.05 542.2 Q2213 543 2211.5 541.75 L2212.9 543.5 Q2210.5 543.75 2209.35 542.2 L2209.45 543.4 Q2206.75 542.8 2207.1 540.35 L2203.85 541 Q2204.45 541 2205.05 541.45 L2204.1 542.1 Q2205.65 542.4 2206.1 543.4 L2203.75 543.65 2204.35 544.65 Q2203 544.9 2202.2 543.95 L2202.85 545.2 Q2201.3 545.05 2200.75 544 L2200.75 544.75 Q2199.35 544.15 2199.5 542.95 2198.05 543.85 2196.75 545.1 2199.1 547.25 2202.6 548.7 2203.3 546.15 2206.05 546.75 L2205.45 547.8 Q2207.15 546.85 2209.25 548.1 L2207.25 549.15 Q2209.15 548.65 2210.6 550.25 L2208.95 550.9 Q2211.3 551.85 2211.8 553.5 L2208 553.3 2208.65 554.95 Q2206.45 554.95 2205.5 553.3 L2206.15 555.45 Q2203.8 554.8 2203.25 552.95 L2203 554.1 Q2200.65 552.55 2201.9 550.35 L2200.55 549.75 Q2196 551.1 2192.4 545.6 L2190.35 545.35 Q2192.7 550.3 2197.3 554.5 L2197.35 554.55 Q2200.1 557.05 2203.65 559.3 2204.65 556.95 2207.3 557.9 L2206.55 558.8 Q2208.35 558.15 2210.25 559.7 L2208.15 560.45 Q2210.05 560.2 2211.35 561.95 L2209.6 562.4 Q2211.8 563.7 2212.05 565.35 2210.45 565.95 2208.3 564.65 L2208.75 566.4 Q2206.6 566.1 2205.85 564.3 L2206.25 566.55 Q2203.95 565.6 2203.7 563.65 L2203.25 564.8 Q2201.05 562.9 2202.7 560.85 2199.85 559.05 2197.5 557.05 2197.45 560.5 2198.6 563.9 2201 562.9 2202.2 565.5 L2201 565.6 Q2202.8 566.4 2203.05 568.85 L2201 567.85 Q2202.55 569.05 2202.2 571.2 L2200.65 570.35 Q2201.3 572.75 2200.3 574.15 2198.8 573.4 2198.2 570.95 L2197.25 572.5 Q2195.9 570.8 2196.7 569 L2195.35 570.85 Q2194.45 568.55 2195.6 567 L2194.5 567.5 Q2194.3 564.65 2196.85 564.35 L2196.15 561.8 Q2191.4 557.1 2190.7 549.65 2189.2 547.45 2188.2 545.1 L2185.9 544.8 2186.3 545.5 2184.85 545.3 Q2186.05 545.7 2186.25 547.05 L2185.15 546.85 Q2186 548.15 2185.65 549.2 2184.6 549.05 2183.75 547.7 L2183.5 548.8 Q2182.35 548 2182.45 546.8 L2182.05 548.15 Q2181.05 547 2181.45 545.85 L2180.9 546.35 Q2180.3 544.9 2181.25 544.2 L2179.75 544 2179.65 544 2174.35 543.35 Q2175.75 545.85 2178.1 548.25 L2178.15 548.3 2182.8 552.25 Q2184.1 549.9 2186.65 551.2 L2185.75 552.05 Q2187.65 551.55 2189.4 553.3 L2187.15 553.8 Q2189.1 553.8 2190.15 555.7 L2188.4 555.95 Q2190.45 557.45 2190.5 559.15 2188.85 559.55 2186.85 558 L2187.05 559.8 Q2184.95 559.25 2184.45 557.4 L2184.55 559.65 2183.5 558.9 2182 558.45 Q2183.7 559.4 2183.7 561.55 L2182 560.9 2182.2 561.3 Q2183.4 562.15 2183.7 563.3 L2182.55 563.6 2182.2 564.7 Q2181.1 564.35 2180.3 563.1 L2179.9 562.95 2180.5 564.65 Q2178.35 564.55 2177.45 562.8 L2177.85 564.35 2178.55 565.45 2176.25 565.2 Q2178.1 565.8 2178.55 567.95 L2176.75 567.65 Q2178.2 569.7 2177.75 571.3 2176.05 571.15 2174.65 569.1 L2174.3 570.85 Q2172.5 569.7 2172.55 567.75 L2171.95 569.95 Q2170.3 568.1 2170.85 566.25 L2170 567.1 Q2168.8 564.45 2171.2 563.3 2169.45 560.55 2167.5 558.45 L2167.45 558.4 Q2165.2 555.95 2162.75 554.4 L2163.15 559.75 2163.15 559.85 2163.25 561.4 Q2164.05 560.45 2165.4 561.1 L2164.9 561.65 Q2166.05 561.3 2167.2 562.35 L2165.8 562.7 Q2167 562.65 2167.75 563.85 L2166.65 564.05 Q2167.95 564.95 2168 566 2167 566.3 2165.7 565.35 L2165.9 566.5 Q2164.55 566.2 2164.2 565.05 L2164.3 566.45 2163.65 566 2163.8 568.35 2168.25 571.05 Q2175.65 572.1 2180.15 577.1 L2182.6 577.9 Q2183.05 575.4 2185.9 575.75 L2185.35 576.8 Q2186.95 575.7 2189.15 576.75 L2187.25 578 Q2189.1 577.3 2190.75 578.7 L2189.15 579.6 Q2191.55 580.3 2192.2 581.85 L2188.4 582.05 2189.2 583.6 Q2187.05 583.85 2185.95 582.25 L2186.8 584.4 Q2184.4 583.95 2183.65 582.15 L2183.5 583.35 Q2181 582.05 2182.05 579.65 2178.75 578.35 2175.35 578.25 2177.2 580.7 2178.85 583.65 2181 582.1 2182.75 584.35 L2181.65 584.75 Q2183.5 585.1 2184.35 587.4 L2182.15 586.95 Q2183.9 587.75 2184.05 589.9 L2182.35 589.4 Q2183.55 591.6 2182.9 593.15 2181.25 592.8 2180.1 590.6 L2179.55 592.3 Q2177.85 590.95 2178.2 589 L2177.3 591.15 Q2175.9 589.15 2176.65 587.35 L2175.7 588.05 Q2174.85 585.4 2177.25 584.5 2175.15 580.8 2172.8 577.95 L2172.75 577.9 Q2168.8 573.1 2164 570.5 L2164.15 572.55 Q2169.45 576.45 2167.9 580.95 L2168.45 582.3 Q2170.65 581.15 2172.1 583.55 L2170.95 583.8 Q2172.75 584.45 2173.3 586.8 L2171.15 586.05 Q2172.8 587.1 2172.7 589.25 L2171.05 588.5 Q2171.9 590.85 2171.1 592.35 2169.45 591.75 2168.65 589.4 L2167.85 591 Q2166.35 589.45 2166.95 587.6 L2165.8 589.55 Q2164.65 587.35 2165.65 585.75 L2164.6 586.3 Q2164.15 583.5 2166.7 582.95 2165.45 579.35 2163.4 576.9 2162.15 578.15 2161.15 579.55 2162.35 579.45 2162.85 580.85 L2162.1 580.85 Q2163.15 581.45 2163.2 583.05 L2162 582.3 Q2162.9 583.15 2162.6 584.45 L2161.65 583.85 Q2161.95 585.4 2161.25 586.2 2160.3 585.65 2160.05 584.1 L2159.4 585 Q2159 584.4 2158.95 583.8 2158.4 585.35 2158.2 587.05 2160.6 586.8 2161.1 589.55 L2159.9 589.35 Q2161.4 590.55 2161.05 593 L2159.35 591.5 Q2160.55 593.05 2159.65 595.05 L2158.4 593.8 Q2158.4 596.3 2157.1 597.4 2155.8 596.3 2155.8 593.8 L2154.55 595.05 Q2153.7 593.05 2154.85 591.5 L2153.1 592.95 Q2152.8 590.55 2154.3 589.3 L2153.1 589.5 Q2153.65 586.65 2156.35 587.05 2156.7 584.15 2157.9 581.55 2158 580.5 2158.65 580.1 2160.15 577.5 2162.55 575.2 L2161.45 561.45 Q2158.25 563.6 2155.55 566.3 2157.25 566.45 2157.85 568.6 L2156.65 568.5 Q2158.3 569.6 2158.15 572.05 L2156.3 570.75 Q2157.6 572.15 2156.9 574.25 L2155.55 573.1 Q2155.8 575.6 2154.55 576.8 2153.15 575.85 2152.95 573.35 L2151.8 574.7 Q2150.8 572.8 2151.85 571.15 L2150.8 572.2 2148.05 576.9 Q2149.9 577.55 2149.6 580 L2148.55 579.45 Q2149.6 581.1 2148.55 583.3 L2147.3 581.4 Q2148 583.2 2146.55 584.85 L2145.75 583.25 Q2144.95 585.65 2143.4 586.3 2142.5 584.85 2143.3 582.45 L2141.7 583.3 Q2141.45 581.1 2143.05 580 L2140.95 580.85 Q2141.4 578.45 2143.2 577.75 L2142 577.6 Q2143.5 574.8 2146.2 576.45 L2146.45 576.05 Q2145.75 572.15 2147.4 568.85 2146.1 569.15 2144.85 569.6 2146.65 572 2144.15 573.75 L2143.85 572.6 Q2143.35 574.5 2141 575.2 L2141.65 573 Q2140.75 574.75 2138.55 574.8 L2139.15 573.1 Q2136.9 574.2 2135.35 573.45 2135.75 571.8 2138.05 570.8 L2136.4 570.15 Q2137.85 568.55 2139.75 568.95 L2137.7 568 Q2139.75 566.65 2141.5 567.5 L2140.8 566.5 Q2143.35 565.85 2144.2 567.9 2148.15 566.4 2152.6 566.55 L2152.7 566.6 2152.8 566.6 2153.3 566.05 Q2154.95 559.15 2161.05 556.15 L2160.65 550.75 2160.2 550.25 Q2160.1 551.85 2159.2 552.45 2158.45 551.7 2158.6 550.1 L2157.7 550.8 Q2157.3 549.55 2158.1 548.6 2157.55 549.05 2156.95 549.45 2156.9 548.3 2157.4 547.65 2154 549.1 2152 552.2 2154.1 552.9 2153.65 555.5 L2152.65 554.9 Q2153.65 556.55 2152.45 558.7 L2151.35 556.75 Q2151.9 558.6 2150.45 560.2 L2149.65 558.55 Q2148.8 560.95 2147.25 561.5 2146.35 560.05 2147.25 557.7 L2145.6 558.4 Q2145.5 556.25 2147.15 555.2 L2145.3 555.9 Q2145.7 556.75 2145.3 558.15 L2144.35 557.45 Q2145.15 559.2 2143.8 561.25 L2142.85 559.15 Q2143.3 561.05 2141.6 562.5 L2141 560.8 Q2139.95 563.05 2138.3 563.45 2137.6 561.9 2138.7 559.7 L2137 560.25 Q2137.1 558.05 2138.85 557.2 L2137.35 557.6 2136.25 558.3 2136.5 556 Q2135.85 557.85 2133.75 558.25 L2134.05 556.5 Q2132 557.95 2130.35 557.45 2130.5 555.75 2132.65 554.4 L2130.85 554 Q2132.05 552.2 2134 552.3 L2131.8 551.65 Q2133.6 550.05 2135.45 550.6 L2134.65 549.75 Q2137.3 548.55 2138.45 551 2141.2 549.2 2143.3 547.3 L2143.35 547.25 2143.4 547.25 Q2145.85 545 2147.35 542.55 L2142.05 542.95 2141.95 542.95 2140.4 543.05 Q2141.35 543.8 2140.7 545.2 L2140.15 544.65 Q2140.5 545.85 2139.4 546.95 L2139.05 545.55 Q2139.1 546.8 2137.9 547.5 L2137.7 546.4 Q2136.8 547.7 2135.75 547.75 2135.45 546.75 2136.4 545.45 L2135.3 545.6 Q2135.6 544.3 2136.75 543.95 L2135.35 544.05 2135.8 543.35 2133.45 543.55 2130.7 547.95 Q2129.6 555.35 2124.55 559.8 L2123.75 562.25 Q2126.25 562.75 2125.9 565.55 L2124.85 565 Q2125.9 566.6 2124.8 568.8 L2123.65 566.9 Q2124.3 568.75 2122.85 570.35 L2122.05 568.8 Q2121.3 571.2 2119.7 571.85 2118.8 570.4 2119.6 568 L2117.95 568.8 Q2117.75 566.65 2119.35 565.55 L2117.25 566.4 Q2117.65 564 2119.5 563.3 L2118.3 563.1 Q2119.65 560.6 2122 561.7 2123.35 558.4 2123.5 554.95 L2118.05 558.45 Q2119.6 560.6 2117.3 562.35 L2116.95 561.2 Q2116.55 563.1 2114.2 563.9 L2114.75 561.7 Q2113.9 563.45 2111.75 563.6 L2112.25 561.9 Q2110.05 563.05 2108.5 562.4 2108.85 560.75 2111.1 559.6 L2109.4 559.05 Q2110.75 557.4 2112.7 557.75 L2110.6 556.85 Q2112.6 555.45 2114.35 556.2 L2113.65 555.25 Q2116.35 554.4 2117.2 556.8 2120.9 554.75 2123.8 552.45 L2123.85 552.4 Q2128.65 548.45 2131.3 543.7 L2129.25 543.8 Q2125.3 549.1 2120.85 547.5 L2119.5 548.05 Q2120.65 550.3 2118.2 551.7 L2117.95 550.55 Q2117.3 552.35 2114.9 552.85 L2115.7 550.75 Q2114.65 552.35 2112.5 552.2 L2113.25 550.6 Q2110.9 551.45 2109.4 550.6 2110 549 2112.35 548.15 L2110.75 547.4 Q2112.35 545.9 2114.2 546.5 L2112.25 545.35 2116.05 545.25 2115.5 544.2 Q2118.35 543.75 2118.85 546.3 2122.45 545.05 2124.9 543.05 L2122.25 540.75 Q2122.4 541.95 2120.95 542.45 L2120.95 541.7 Q2120.35 542.8 2118.8 542.8 L2119.55 541.6 Q2118.7 542.5 2117.4 542.15 L2118 541.25 Q2116.45 541.5 2115.65 540.8 2116.2 539.9 2117.75 539.65 L2116.85 538.95 Q2117.45 538.55 2118.1 538.55 L2114.85 537.75 Q2115.05 540.15 2112.3 540.6 L2112.5 539.45 Q2111.3 540.95 2108.85 540.55 L2110.35 538.85 Q2108.8 540.05 2106.8 539.15 L2108.05 537.9 Q2105.55 537.85 2104.5 536.55 2105.6 535.25 2108.1 535.3 L2106.9 534 Q2108.85 533.15 2110.4 534.35 L2108.95 532.6 Q2111.4 532.3 2112.6 533.8 L2112.4 532.65 Q2115.25 533.2 2114.8 535.9 2117.75 536.3 2120.35 537.5 2121.4 537.6 2121.75 538.25 2124.35 539.8 2126.6 542.2 L2140.35 541.25 Q2138.25 538 2135.55 535.3 2135.4 537 2133.25 537.55 L2133.35 536.35 Q2132.25 537.95 2129.8 537.85 L2131.1 536 Q2129.7 537.3 2127.65 536.55 L2128.75 535.2 Q2126.25 535.4 2125.1 534.2 2126.05 532.8 2128.55 532.65 L2127.2 531.45 Q2129.15 530.45 2130.75 531.5 L2129.7 530.45 2125.05 527.65 Q2124.4 529.55 2121.95 529.2 L2122.5 528.15 Q2120.85 529.2 2118.65 528.1 L2120.6 526.9 Q2118.75 527.55 2117.15 526.1 L2118.7 525.3 Q2116.3 524.55 2115.7 522.95 L2119.5 522.85 2118.75 521.25 Q2120.9 521.05 2122 522.65 L2121.15 520.55 Q2123.55 521 2124.25 522.8 L2124.45 521.65 Q2127.2 523.15 2125.5 525.9 L2125.9 526.1 Q2129.8 525.45 2133.1 527.1 L2132.35 524.55 Q2129.95 526.35 2128.2 523.8 L2129.35 523.5 Q2127.5 523 2126.8 520.65 L2128.95 521.3 Q2127.25 520.35 2127.2 518.2 L2128.9 518.8 Q2127.85 516.5 2128.55 515 2130.25 515.45 2131.25 517.75 L2131.9 516.1 Q2133.5 517.5 2133.05 519.4 L2134.05 517.4 Q2135.35 519.45 2134.5 521.2 L2135.5 520.55 Q2136.1 523.05 2134.05 523.9 2135.5 527.85 2135.3 532.3 L2135.3 532.45 2135.3 532.55 2135.85 533.05 Q2142.75 534.75 2145.65 540.85 L2151.05 540.5 2151.55 540.05 Q2149.95 539.95 2149.4 539.05 2150.15 538.3 2151.7 538.45 L2151 537.55 Q2152.3 537.15 2153.2 538 L2152.4 536.8 Q2153.55 536.75 2154.2 537.3 2152.8 533.9 2149.65 531.85 2149 533.95 2146.4 533.5 L2146.95 532.45 Q2145.3 533.45 2143.15 532.25 L2145.15 531.15 Q2143.3 531.75 2141.7 530.2 L2143.35 529.45 Q2141 528.6 2140.45 527 2141.9 526.15 2144.25 527.05 L2143.55 525.4 Q2145.35 525.35 2146.4 526.55 L2146.6 526.6 2146.55 526.5 Q2145.15 525.5 2145.2 523.5 L2146.85 524.2 Q2145.95 521.85 2146.8 520.35 2148.4 520.9 2149.25 523.25 L2150 521.65 Q2151.55 523.2 2150.95 525.05 L2152.05 523.1 Q2153.25 525.25 2152.3 526.9 L2153.3 526.3 Q2153.8 528.9 2151.7 529.6 2153.75 532.7 2157.15 534.1 2156.6 533.45 2156.65 532.3 L2157.85 533.1 Q2157 532.2 2157.4 530.95 L2158.3 531.65 Q2158.1 530.05 2158.9 529.3 2159.75 529.9 2159.9 531.45 L2160.3 530.95 2160.65 525.55 Q2154.55 522.65 2152.8 515.75 L2152.3 515.2 2152.2 515.2 2152.1 515.25 Q2147.65 515.45 2143.7 514 2142.85 516.05 2140.3 515.45 L2140.95 514.45 Q2139.25 515.3 2137.15 514 L2139.2 513 Q2137.3 513.45 2135.85 511.9 L2137.5 511.2 Q2135.2 510.2 2134.75 508.55 2136.3 507.8 2138.55 508.85 L2137.95 507.2 Q2140.1 507.2 2141.05 508.9 L2140.4 506.75 Q2142.75 507.45 2143.25 509.3 L2143.55 508.15 Q2146.05 509.9 2144.3 512.3 L2146.85 513.05 Q2145.2 509.7 2145.8 505.85 L2145.6 505.4 Q2142.9 507.15 2141.35 504.4 L2142.55 504.15 Q2140.75 503.5 2140.25 501.1 L2142.4 501.9 Q2140.8 500.8 2140.95 498.7 L2142.55 499.45 Q2141.75 497.05 2142.65 495.65 2144.2 496.25 2145 498.65 L2145.8 497.05 Q2147.25 498.65 2146.65 500.5 L2147.8 498.55 Q2148.9 500.75 2147.85 502.4 L2148.9 501.85 Q2149.25 504.3 2147.4 505 L2150.2 509.65 2151.25 510.65 Q2150.2 509.05 2151.2 507.1 L2152.4 508.5 Q2152.55 505.95 2153.95 505 2155.15 506.15 2154.95 508.65 L2156.3 507.5 Q2157.05 509.55 2155.75 511 L2157.6 509.7 Q2157.75 512.15 2156.15 513.2 L2157.3 513.15 Q2156.75 515.3 2155.05 515.45 2157.75 518.15 2161 520.25 L2161.9 506.45 Q2159.5 504.25 2157.95 501.65 2157.3 501.25 2157.2 500.2 2156 497.6 2155.55 494.7 2152.9 495.15 2152.3 492.3 L2153.5 492.45 Q2152 491.3 2152.3 488.85 L2154.05 490.3 Q2152.8 488.75 2153.65 486.75 L2154.95 487.95 Q2154.9 485.45 2156.2 484.4 2157.5 485.45 2157.5 487.95 L2158.75 486.65 Q2159.7 488.65 2158.5 490.2 L2160.2 488.7 Q2160.6 491.15 2159.1 492.4 L2160.3 492.15 Q2159.85 494.9 2157.4 494.7 2157.65 496.35 2158.25 497.95 2158.25 497.35 2158.65 496.7 L2159.3 497.6 Q2159.55 496.05 2160.5 495.5 2161.2 496.3 2160.95 497.85 L2161.85 497.2 Q2162.2 498.55 2161.3 499.4 L2162.5 498.65 Q2162.5 500.2 2161.4 500.8 L2162.15 500.8 Q2161.65 502.25 2160.45 502.1 L2162.75 504.75 Q2164.75 502.3 2166 498.7 2163.4 498.2 2163.85 495.35 L2164.9 495.9 Q2163.9 494.3 2165 492.1 L2166.15 494.05 Q2165.55 492.2 2167.05 490.6 L2167.85 492.2 Q2168.65 489.8 2170.25 489.25 2171.1 490.7 2170.25 493.05 L2171.85 492.3 Q2172.05 494.45 2170.4 495.55 L2172.5 494.7 Q2172.05 497.15 2170.2 497.75 L2171.35 498 Q2170 500.45 2167.7 499.3 L2167.2 500.7 Q2168.8 505.15 2163.55 509.1 L2163.4 511.15 Q2168.2 508.5 2172.1 503.65 L2172.15 503.6 Q2174.45 500.7 2176.5 497 2174.1 496.15 2174.9 493.45 L2175.9 494.15 Q2175.1 492.4 2176.5 490.35 L2177.4 492.45 Q2177.05 490.55 2178.7 489.15 L2179.25 490.85 Q2180.4 488.6 2182.05 488.25 2182.7 489.8 2181.55 492.05 L2183.25 491.5 Q2183.1 493.65 2181.4 494.5 L2183.55 494 Q2182.75 496.3 2180.9 496.7 L2182 497.05 Q2180.3 499.35 2178.1 497.8 L2174.65 503.3 M2149.35 512.55 L2150.2 512.75 Q2148.2 510.2 2146.55 507.25 2146.35 510.45 2148 513.25 L2149.55 513.4 2149.35 512.55 M2160.9 522.3 Q2157.2 520.05 2154.15 517.1 2155.95 522.2 2160.75 524.6 L2160.9 522.3 M2125.3 553.55 Q2125.4 555.9 2124.95 558.2 2128.35 554.65 2129.5 549.4 L2125.3 553.55 M2162.25 529.45 L2162.05 532.7 Q2164.05 530.45 2165.05 527.6 L2162.25 529.45 M2149.6 542.4 L2147.7 545.25 Q2150.55 544.2 2152.8 542.2 L2149.6 542.4 M2147.35 553 L2146.2 552.75 Q2147.7 550.15 2150.2 551.65 2151.6 549.3 2153.65 547.75 2155 544.3 2159.75 541.7 L2154.2 542.1 Q2151.1 545.35 2146.65 546.5 L2144.9 548.3 Q2145.15 551.85 2143.7 554.6 L2145.1 555.55 Q2145.7 553.55 2147.35 553 M2165 540.35 Q2165.65 537.55 2167 535.45 2164.65 536.8 2162.7 540 L2165 540.35 M2156.85 540.1 L2159.2 539.9 2159.1 539.75 2156.35 537.9 2156.85 540.1 M2160.95 540.85 L2160.95 540.9 2160.95 540.85 M2159.95 536.75 L2157.8 536.25 2159.8 539.1 2159.95 536.75 M2160.2 544.95 L2160 542.6 Q2156.7 544.4 2155.2 546.7 2157.4 545.5 2160.2 544.95 M2132.6 529.6 L2133.45 529.75 2133.3 528.2 Q2130.55 526.6 2127.3 526.8 L2132.85 530.45 2132.6 529.6 M2126.6 544 Q2124.75 545.65 2122.25 546.9 2125.25 547.25 2128.05 543.9 L2126.6 544 M2142.4 541.1 L2144.7 540.95 Q2142.25 536.2 2137.2 534.4 2140.15 537.45 2142.4 541.1 M2143.1 549.85 L2139.45 552.45 2140 553.25 Q2140.95 553.05 2142.05 553.8 2143 552.05 2143.1 549.85 M2162.55 552.2 L2165.4 554.05 Q2164.35 551.2 2162.3 549 L2162.55 552.2 M2161.3 559.4 L2161.15 557.1 Q2156.4 559.6 2154.65 564.65 2157.65 561.7 2161.3 559.4 M2162.2 547.6 Q2165.45 550.65 2166.7 555.1 L2168.5 556.85 Q2172.05 556.55 2174.8 557.95 2175.15 557 2175.8 556.55 2176.25 555.85 2177.3 555.55 2176.05 552.75 2176.5 549.2 L2174.85 547.3 Q2170.5 545.9 2167.6 542.45 L2161.75 541.75 2162.2 547.6 M2169.65 522.95 Q2171.8 522.85 2173.6 521.9 2172.85 520.8 2173.05 519.85 L2172.25 519.3 2169.65 522.95 M2173.25 505.15 Q2171.3 507.5 2169.15 509.35 2174.4 508.15 2177.9 504.75 L2173.25 505.15 M2149.9 569.3 L2150.05 568.45 2148.5 568.6 Q2146.9 571.4 2147.15 574.65 2148.8 571.65 2150.75 569.05 L2149.9 569.3 M2189.8 531.25 L2189.55 532.05 Q2192.25 530.25 2195.3 528.75 2192.05 528.35 2189.2 529.8 L2188.95 531.35 2189.8 531.25 M2178.2 550.85 Q2178.2 553.05 2179.05 554.9 2180.15 554.2 2181.1 554.45 L2181.7 553.65 2178.2 550.85 M2179.4 542.15 Q2181.85 538.6 2184.95 535.75 2179.8 537.25 2177.1 541.85 L2179.4 542.15 M2172.15 543.05 L2168.95 542.65 Q2171.05 544.8 2173.85 546 L2172.15 543.05 M2195 545.95 L2193.6 545.75 Q2196.15 549.25 2199.2 549.1 2196.8 547.75 2195 545.95 M2170.05 558.6 L2172.7 562.25 Q2173.1 561.9 2173.5 561.7 2173.3 560.75 2174.05 559.65 2172.25 558.7 2170.05 558.6 M2195.75 555.55 Q2193.5 553.45 2191.8 551.2 2192.65 556.5 2195.85 560.2 2195.55 557.85 2195.75 555.55 M2173.85 576.4 L2178.55 576.75 Q2175 573.35 2169.7 572.25 2171.9 574.05 2173.85 576.4 M2164.35 575.2 Q2166.05 577.05 2167.25 579.55 2167.6 576.5 2164.25 573.8 L2164.35 575.2"
        />
        <path
          stroke="none"
          fill="url(#gradient190)"
          d="M216.35 687.8 L216.55 688.1 223.95 688.85 235.6 682.3 234.05 680.15 233.8 679.85 232.25 680.9 Q231.75 679.8 232.5 677.65 L232.95 676.95 Q233.05 675.3 234.55 673.7 232.95 674.4 231.55 674.1 L230.75 674.3 Q228.5 674.5 227.55 673.75 227.95 673 229 672.5 L228.75 672.2 227.05 670.15 217.75 679.7 Q217.45 683.9 216.35 687.8 M211.25 686.45 L211.35 687.4 214.35 687.25 214.65 687.3 215.7 681.8 211.25 686.45 M216.7 645.35 L216.6 645.05 216.1 644.9 216.7 645.35 M219.9 639.8 Q218.95 639.9 218 639.4 L218.15 640.95 218.05 641.5 219.3 641.95 Q219.95 642.3 220.25 642.95 L220.25 643.05 225.85 643.75 220.95 639.6 219.9 639.8 M219.65 645.05 L218.6 645.4 220.25 649.75 222.7 655.05 Q223.55 653.55 224.5 653.15 225.2 654.25 224.65 656.4 224.3 657.55 223.7 657.75 224.95 661.6 224.95 664.7 L227.35 667.6 227.05 663.6 227 663.55 226.55 657.85 227.45 657.75 227.8 661.7 229.7 657.4 230.5 657.75 227.9 663.6 228.35 668.85 230.15 671.05 231.2 671.9 231.95 672.2 Q233.15 672.45 234.65 671.6 233.2 671.3 232.45 670.55 L233.75 669.45 Q233.1 668.75 232.9 668 L237.05 668.2 238.05 669.05 238.2 669.3 239.85 668.2 236.55 663.8 Q234.35 661.25 234.65 659 L234.4 658.25 Q234.05 656 234.75 655 235.5 655.35 236.1 656.35 L236.35 656.1 238.3 654.25 228.1 645.65 219.95 644.8 219.65 645.05 M250.15 643.1 Q252 640.8 250.6 638.7 L248.45 636.35 245.1 636.4 244.1 637.3 Q242.05 638.25 240.9 637.8 241 637.05 241.75 636.25 L236 635.55 234.95 636.65 Q234.1 637.2 232.9 637.2 228.2 636.75 226.5 634.7 227.3 633.7 228.8 633.1 227.8 631.8 227.6 630.6 230.1 629.65 234.4 631.6 235.45 632.2 235.95 633.2 L236.15 633.75 238.15 634.05 Q236.7 632.15 236.85 630.7 237.6 630.6 238.5 631 238.65 630 239.1 629.4 240.55 630.05 241.55 632.75 241.75 633.45 241.55 634.05 L241.4 634.45 246.85 634.6 241.1 628.25 241.05 628.25 239.5 626.65 233.05 625.5 228.45 628 228 627.2 231.6 625.25 228.3 624.6 228.45 623.75 233 624.55 233.05 624.55 238.4 625.55 236.35 623.45 235.55 623.6 Q234.5 623.65 233.45 623.05 229.6 620.25 229.2 617.7 L231.95 617.45 Q231.75 615.85 232.2 614.65 234.8 615.1 237.55 618.95 238.2 619.95 238.1 621.1 L237.8 622.3 241.85 626.45 243.45 625.2 243.3 625.1 242.6 623.95 Q242.15 621.1 243.1 619.8 L244.35 620.9 245.65 619.8 Q246.4 620.75 246.3 622.65 L248.15 620.55 247.85 619.2 Q247.75 618.2 248.35 617.15 251.15 613.3 253.75 612.9 254.2 614.05 254 615.65 L256.75 615.9 Q256.3 618.5 252.45 621.25 251.45 621.85 250.35 621.8 L249.55 621.65 248.5 622.95 248.65 622.9 Q250.9 622.85 251.8 623.75 251.1 624.8 248.9 625.3 247.25 625.5 247.05 624.45 L243.1 627.8 247.85 632.95 Q247.8 631.2 248.45 630.3 L249.75 631.4 Q250.35 630.6 251.05 630.3 252 631.6 251.5 634.45 L250.85 635.55 250.45 635.85 252 637.55 252.05 637.6 Q252.9 638.75 253.05 639.95 L255.35 636.25 255.35 631.1 256.25 631.1 256.25 634.75 257.95 632 258.7 632.45 252.85 642 Q252.45 643.15 251.5 644.3 L251.4 644.4 245.9 649.55 Q249.85 648.65 254.8 645.9 L254.7 645.8 Q254.3 645.25 254.3 644.5 254.6 641.65 255.85 640.65 256.45 641.1 256.85 642 257.6 641.4 258.35 641.3 258.75 642.25 258.35 643.7 260.8 641.8 261.95 639.05 L261.05 638.1 Q260.45 637.25 260.45 636.05 260.95 631.3 263 629.65 263.95 630.45 264.55 631.95 265.85 630.95 267.1 630.75 268.05 633.2 266.05 637.55 265.5 638.6 264.5 639.1 L263.75 639.35 Q263.2 640.85 262.3 642.15 L264.9 641 264.95 640.85 Q265.25 640.25 265.9 639.9 268.55 638.7 270.05 639.3 L269.3 640.8 Q270.2 641.2 270.7 641.75 269.7 643 266.8 643.3 L265.55 642.95 265.35 642.8 Q261.75 644.4 258.15 646.05 L253.05 648.85 Q254.6 649.55 255.05 650.5 254.05 651.25 251.85 650.9 250.7 650.6 250.45 650 246.65 651.55 243.6 651.75 L240.85 654.35 244.85 653.75 250.55 652.9 250.65 653.8 246.75 654.4 251.2 655.95 250.9 656.8 244.9 654.65 239.7 655.45 237.6 657.4 Q237.1 657.9 236.85 658.5 L236.6 659.25 Q236.45 660.5 237.4 661.95 237.6 660.45 238.25 659.65 238.95 660.05 239.45 660.9 240.15 660.15 240.85 659.9 241.65 661.3 240.95 664.1 L240.15 665.15 239.95 665.3 241.4 667.25 241.85 666.95 241.85 667.05 246.8 664.05 Q249.55 662.1 251.75 662.65 L252.55 662.4 Q254.8 662.3 255.75 663.1 255.35 663.8 254.3 664.3 L254.5 664.6 256.15 666.7 265.7 657.4 Q266.1 653.2 267.3 649.3 L267.1 649 Q266.8 648.45 266.9 647.7 267.45 644.9 268.75 644 L269.6 645.5 Q270.45 644.95 271.2 644.9 271.6 646.45 270.2 648.95 L269.15 649.8 269.05 649.85 Q268.2 652.5 267.75 655.35 L272.4 650.85 Q272.25 650.35 272.25 649.75 272.3 648.7 273 647.75 276.15 644.15 278.75 644 279.1 645.2 278.75 646.75 280.35 646.7 281.45 647.25 280.8 649.8 276.7 652.2 275.6 652.75 274.5 652.55 L273.55 652.25 271.3 654.45 Q272.3 654.6 272.85 655.05 272.2 656.15 270.05 656.75 L268.9 656.75 266.55 659.1 272.7 658.3 272.8 659.2 265.45 660.15 264.4 661.15 266.9 661.35 Q266.75 662.1 266.05 662.8 266.95 663.3 267.35 663.9 266.25 665.05 263.35 665.1 262.65 665 262.15 664.6 L261.55 663.95 260.8 664.7 261.05 665 Q262.3 666.85 262.05 668.1 260.8 668.1 259.2 666.5 L259.1 666.35 257.25 668.15 262 674.25 Q262.5 673.85 263.15 673.75 266 673.55 267.25 674.6 L266 675.8 267 677.2 Q266.1 677.7 264.6 677.6 L266.1 679.55 Q268.25 681.65 270.45 680.4 L273 678.55 273.25 675.2 272.45 674.1 Q271.75 672 272.3 670.85 273.05 671.05 273.75 671.8 274.2 669.05 274.95 666.2 274.4 665.8 274 665.05 273.5 664.15 273.65 662.95 274.55 658.3 276.75 656.85 277.65 657.7 278.1 659.25 279.5 658.4 280.7 658.3 281.4 660.85 279.05 664.95 278.4 665.95 277.35 666.35 L276.75 666.5 276.25 668.45 Q278.35 667.2 279.75 667.5 L279.25 669.15 Q280.25 669.35 280.8 669.85 280.05 671.25 277.25 672 L275.95 671.85 275.6 671.7 Q275.1 674.4 274.9 677.1 L281.75 671.95 281.8 671.9 283.5 670.55 285.3 664.2 283.25 659.4 284.1 659.05 285.65 662.8 286.6 659.55 287.45 659.8 286.2 664.25 286.2 664.3 284.7 669.55 287 667.7 Q286.9 667.35 286.95 666.85 286.95 665.85 287.7 664.85 290.8 661.3 293.4 661.15 293.75 662.35 293.4 663.9 L296.15 664.4 Q295.45 666.95 291.35 669.3 290.3 669.85 289.2 669.65 288.45 669.55 288 669.25 L283.5 672.9 284.55 674.6 284.7 674.45 Q285.2 674 285.9 673.9 288.8 673.7 290 674.75 L288.8 675.9 289.75 677.3 Q288.7 677.95 286.85 677.7 L288.8 679.75 290.1 679.55 Q291.15 679.55 292.15 680.25 295.7 683.4 295.85 686 294.65 686.35 293.1 686 293.15 687.6 292.6 688.7 290.05 688.05 287.65 683.95 287.15 682.9 287.3 681.75 L287.5 681.05 286.35 679.85 286.35 680 Q286.2 682.2 285.25 683.05 284.25 682.25 283.95 680.05 283.9 678.35 285 678.25 L282 674.05 276.45 678.2 Q278.15 678.35 279.05 679.1 L277.8 680.25 Q278.55 680.95 278.8 681.65 L274.6 681.75 273.55 680.95 273.3 680.55 271.45 681.95 271.4 681.95 Q270.2 682.7 269 682.75 L272.45 685.35 277.55 685.85 277.45 686.75 273.85 686.4 276.45 688.35 275.9 689.1 266.95 682.35 Q265.85 681.85 264.8 680.8 L264.75 680.7 260.1 674.75 Q260.6 678.7 262.9 683.9 L263 683.8 264.3 683.6 Q267.15 684.15 268.05 685.5 L266.55 686.3 Q267.1 687.15 267.15 687.9 L264.75 687.7 Q266.4 690.3 269.05 691.7 L270.05 690.85 Q270.95 690.4 272.15 690.5 276.8 691.45 278.3 693.6 277.4 694.5 275.85 695 276.7 696.35 276.8 697.6 274.25 698.3 270.15 695.95 269.15 695.3 268.75 694.2 L268.55 693.45 265.9 691.75 266.8 694.45 266.95 694.55 267.8 695.55 Q268.75 698.3 268.05 699.7 L266.6 698.85 265.5 700.15 Q264.35 699 264.3 696.1 264.4 695.4 264.8 694.9 L264.95 694.7 262.45 687.25 Q261.05 684.45 260.1 681.9 259.25 683.4 258.25 683.75 257.6 682.65 258.2 680.5 258.6 679.4 259.2 679.2 258.05 675.3 258.1 672.2 L255.8 669.2 256.05 673.25 256.05 673.3 256.35 679 255.45 679.05 255.2 675.1 253.2 679.4 252.4 679 255.15 673.2 254.85 667.95 253.1 665.7 252.05 664.85 251.35 664.55 Q250.1 664.25 248.6 665.1 250.05 665.4 250.75 666.15 L249.45 667.2 Q250.1 667.95 250.25 668.7 248.8 669.4 246.1 668.4 245.45 668.05 245.1 667.5 L245 667.3 242.5 668.8 242.4 668.85 242.5 668.85 239.3 671.8 239.5 671.95 240.05 673.15 Q240.25 676 239.15 677.25 238.5 676.85 238 676.05 L236.6 677 Q236.05 676.1 236.2 674.6 234.95 675.8 234.9 677.1 L234.95 677.85 235.5 679.1 237.2 681.4 242.1 683.2 248.45 682.2 248.6 683.1 243.95 683.8 247.65 685.15 247.35 686 241.95 684.1 241.9 684.05 238.1 682.7 240.3 685.75 Q243.3 686.6 246.7 688.8 247.05 688.25 248.25 688.2 250.5 688.25 251.35 689.15 250.75 690 249.1 690.45 L253.5 694.15 259.95 698.7 260.2 698.6 261.5 698.5 Q264.25 699.35 265 700.75 264.4 701.2 263.5 701.45 263.9 702.3 263.9 703.05 262.3 703.35 259.95 701.7 259.4 701.2 259.2 700.55 L259.15 700.4 256.85 698.75 Q257.5 700.2 257.75 701.8 L258.4 702.2 Q259.3 702.85 259.65 704 260.75 708.65 259.35 710.9 258.2 710.4 257.15 709.25 256.25 710.6 255.15 711.2 253.45 709.15 253.9 704.4 254.1 703.25 254.85 702.5 L255.9 701.75 Q255.3 698.8 253.3 696.5 253.35 698 252.8 698.85 L251.45 697.85 250.25 699.05 Q249.2 697.8 249.45 694.9 249.6 694.2 250.05 693.75 L250.15 693.65 Q245.85 690 242.2 688.35 L246.65 694.6 Q247.35 695.9 247.55 697.1 L251.45 707.6 250.65 707.9 249.45 704.85 248.8 708.45 247.9 708.25 248.9 703.25 247.35 699.2 Q246.95 700.3 245.9 701.3 L244 702.7 244.35 703.05 Q244.75 703.55 244.8 704.3 244.7 707.15 243.55 708.25 L242.45 706.95 241 707.8 Q240.5 706.75 240.9 705.05 L235.25 709.2 Q237.1 711.15 238.5 713.25 238.9 712.25 240.5 712.75 242.55 713.7 243 714.85 L239.75 715.05 239.6 715 240.45 716.45 241.2 716.45 Q242.35 716.6 243.2 717.45 246.45 720.85 246.4 723.5 L243.65 723.2 Q243.5 724.8 242.85 725.9 240.4 724.95 238.4 720.65 238 719.55 238.25 718.55 238.45 717.8 238.85 717.3 L237.4 714.9 Q237.15 716.7 236.25 717.55 235.65 717.1 235.2 716.2 234.45 716.9 233.7 717.05 233.05 715.6 234.05 712.9 234.35 712.25 234.95 711.9 L235.15 711.8 233.8 710.3 229 713.55 229.1 714.85 Q228.95 715.95 228.15 716.85 224.7 720.1 222.05 720 221.85 718.75 222.35 717.25 220.75 717.15 219.7 716.5 220.6 714 224.9 712.05 L227.05 711.9 227.8 712.2 230.2 710.5 224.75 710.45 220.1 710.4 220.1 709.5 223.5 709.55 220.35 706.9 220.95 706.25 224.9 709.55 231.55 709.65 233.35 708.4 233.4 708.35 240.25 703.25 234.85 702.35 234.95 702.75 234.7 704.05 Q233.2 706.5 231.65 706.85 231.3 706.15 231.35 705.2 230.4 705.4 229.65 705.2 229.8 703.75 231.6 702.1 L229.55 702.05 229.25 702.55 Q228.6 703.45 227.45 703.8 222.85 704.9 220.6 703.5 221 702.35 222.2 701.3 220.9 700.4 220.3 699.3 222.3 697.6 227.05 698 228.2 698.25 228.95 699 L229.8 700.2 235.55 700.65 Q234.95 699.75 235 699 236.25 698.8 238.05 700.05 L238.9 701.1 242.15 701.8 244.7 699.95 Q246.5 698.15 245.05 695.55 L243.65 693.55 Q243.35 694.95 242.6 695.7 L241.55 694.35 240.05 695.2 Q239.35 693.75 240.35 691 240.65 690.4 241.15 690.1 L236.65 683.8 234.4 685.05 234.55 685.2 Q235.6 687.2 235.25 688.4 234 688.25 232.55 686.55 L232.35 686.2 231.4 686.75 231.9 687.45 Q232.15 688.05 232 688.75 231.15 691.55 229.75 692.3 229.25 691.7 229.05 690.75 L227.4 691.15 Q227.2 690.1 227.95 688.7 L226.65 689.4 223.7 696.2 222.85 695.8 225.35 690.15 222.45 691.75 222.1 692.85 Q220.95 694.75 219.7 695 219.4 694.35 219.55 693.4 L216.8 694.9 216.8 695.9 Q216.7 697.05 215.85 697.9 212.4 701.2 209.8 701.1 209.6 699.85 210.1 698.35 208.45 698.2 207.4 697.55 208.3 695.1 212.6 693.1 L214.75 693 214.85 693 214.15 691.7 Q213.35 692.25 212.6 692.3 212.4 691.75 212.5 691.05 211.2 691.05 210.4 690.55 210.7 689.85 211.45 689.2 L211.05 688.95 210.7 689.55 Q207.65 693.2 205.05 693.4 204.7 692.2 205 690.65 L202.25 690.2 Q202.85 687.65 206.9 685.15 207.95 684.6 209.05 684.75 L210.05 685.05 212.25 682.8 Q211.25 682.65 210.7 682.2 211.25 681.1 213.45 680.45 L214.55 680.4 216.85 678 210.75 678.95 210.6 678.05 217.9 676.95 218.95 675.9 216.4 675.75 Q216.6 675 217.25 674.3 L215.9 673.2 Q217 672.05 219.9 671.95 220.65 672 221.15 672.4 L221.7 673.05 222.45 672.3 222.2 672 Q220.9 670.15 221.15 668.9 222.35 668.85 224 670.45 L224.15 670.6 225.9 668.75 221 662.75 219.9 663.3 Q217 663.55 215.8 662.5 216.15 661.85 216.95 661.3 216.2 660.65 215.95 659.95 216.85 659.4 218.3 659.45 L216.75 657.6 Q214.6 655.55 212.4 656.8 L209.9 658.75 209.75 662.1 Q210.2 662.35 210.55 663.15 211.35 665.25 210.8 666.4 210.05 666.25 209.35 665.45 L208.25 671.1 Q208.85 671.5 209.25 672.25 209.75 673.15 209.65 674.35 208.9 679.05 206.7 680.55 205.8 679.7 205.3 678.15 203.95 679.05 202.7 679.15 201.95 676.65 204.2 672.45 204.85 671.45 205.85 671.05 L206.45 670.85 206.9 668.9 Q204.85 670.2 203.45 669.95 203.45 669.2 203.9 668.3 202.95 668.1 202.35 667.65 203.1 666.2 205.85 665.4 L207.15 665.5 207.5 665.65 208.05 660.25 201.35 665.55 201.3 665.6 199.6 667 198 673.4 200.15 678.1 199.35 678.5 197.65 674.8 196.8 678.1 195.95 677.85 197.1 673.35 198.45 668.05 196.2 669.9 196.25 670.75 Q196.3 671.8 195.6 672.8 192.55 676.45 189.95 676.65 189.6 675.45 189.9 673.9 L187.15 673.45 Q187.75 670.9 191.8 668.4 192.85 667.85 193.95 668 194.7 668.15 195.2 668.45 L199.6 664.65 198.45 663 198.35 663.15 Q197.85 663.6 197.15 663.75 194.25 664 193 662.95 193.35 662.3 194.2 661.75 L193.2 660.4 Q194.25 659.75 196.05 659.95 L194.1 657.95 192.8 658.2 Q191.75 658.2 190.75 657.5 187.1 654.5 186.9 651.85 L189.65 651.8 Q189.55 650.2 190.05 649.05 192.65 649.7 195.1 653.7 195.7 654.75 195.5 655.9 L195.35 656.6 196.55 657.8 196.55 657.65 Q196.65 655.4 197.6 654.55 198.6 655.3 198.9 657.55 199 659.2 197.95 659.3 L201 663.5 206.5 659.15 Q204.75 659.05 203.85 658.35 204.25 657.7 205.05 657.15 204.3 656.45 204.05 655.75 L208.2 655.55 209.3 656.35 209.55 656.75 211.4 655.25 Q212.6 654.5 213.85 654.4 L210.3 651.9 205.15 651.55 205.2 650.65 208.85 650.9 206.25 649 206.75 648.3 215.9 654.8 218.05 656.3 218.15 656.35 222.9 662.2 Q222.3 658.25 219.9 653.15 L219.8 653.2 Q219.2 653.55 218.5 653.5 215.6 653 214.7 651.7 215.25 651.1 216.15 650.8 215.6 650 215.55 649.25 L217.95 649.4 Q216.25 646.85 213.55 645.5 L212.55 646.35 210.45 646.75 Q205.75 645.95 204.25 643.8 205.1 642.9 206.6 642.4 205.75 641.05 205.65 639.8 208.15 639 212.3 641.3 213.35 641.95 213.75 642.95 L213.95 643.7 214.7 644.05 214.5 643.85 215.8 642.95 215.7 642.7 215.55 642.6 Q215 642.3 214.65 641.6 213.65 638.9 214.35 637.45 215.1 637.65 215.8 638.3 L216.05 637.85 Q213.85 635.85 213.55 633.9 L216.3 633.65 Q216.1 632.05 216.55 630.9 219.15 631.3 221.9 635.15 222.55 636.2 222.45 637.3 L222.25 638.3 224.65 640.35 Q224.7 639.35 225.1 638.75 226.25 639.25 227.05 641.35 L227.2 642.5 229.75 644.6 228.35 638.6 229.25 638.4 230.85 645.6 232 646.55 Q231.6 645 231.95 644.05 232.7 644.15 233.5 644.75 233.9 643.85 234.45 643.35 235.7 644.35 236 647.25 236 647.95 235.65 648.5 L235.05 649.1 235.85 649.8 236.1 649.55 Q237.85 648.1 239.1 648.25 239.25 649.45 237.8 651.2 L237.65 651.35 239.6 653 245.25 647.7 Q244.8 647.25 244.65 646.6 244.2 643.75 245.1 642.45 245.8 642.8 246.4 643.55 247.05 642.8 247.7 642.45 248.3 643.3 248.35 644.8 L250.15 643.1 M215.8 693.4 L221.4 690.25 216.7 689.9 Q216.25 692.2 215.15 693.1 L215.8 693.4"
        />
        <path
          stroke="none"
          fill="url(#gradient191)"
          d="M419.8 635.95 Q419.4 636.5 418.7 636.55 415.75 637.4 414.3 639.3 L413.9 639.85 413.15 643.05 412.95 643.65 413.2 643.4 414.8 641.95 Q415.6 641.35 416.5 640.95 L417.4 640.65 417.4 640.6 418.35 640.6 Q419.25 640.8 419.65 641.5 420.05 642.2 419.8 643.1 L419.15 644.05 Q418.5 644.65 417.6 644.75 414.5 645 412.1 646.35 L411.75 646.55 411.3 647.5 412 647 413.35 646.45 414.05 646.3 414.75 646.4 Q415.45 646.65 415.65 647.25 415.9 647.8 415.6 648.5 L415 649.15 413.8 649.45 413.75 649.45 Q411.5 649.35 409.65 650.05 L409.55 650.1 408.6 651.25 408.6 651.35 408.5 651.75 408.3 652.05 408.05 652.35 407.75 652.6 406.8 653.35 409.6 653.95 411.15 654.55 411.35 654.6 411.4 654.6 412.3 654.15 413.45 653.25 413.85 652.8 Q414.2 652.6 414.4 652.55 L415.15 652.65 415.55 653.25 415.5 653.75 415.15 654.2 Q414.3 654.95 412.5 655.05 L412.75 655.15 415.9 655.9 416.1 655.75 Q416.8 655.25 417.1 654.25 417.2 653.95 417.4 653.8 417.6 653.6 417.75 653.65 L418.25 653.8 418.45 654.3 418.35 654.6 418.2 654.9 418 655.1 417.75 655.3 416.95 655.9 417.7 655.9 420.3 655.3 420.4 655 Q420.75 653.85 420.3 652.45 L420.25 651.8 420.65 651.3 421.3 651.2 421.8 651.6 421.95 652.1 422 652.6 421.75 653.95 421.2 654.9 422.7 654 424.65 652.15 424.7 651.6 424.55 650.6 424.5 650.2 424.5 649.75 424.85 649.35 425.4 649.3 425.7 649.55 425.85 649.95 425.85 650.25 426.05 649.85 426.1 649.4 425.95 647.95 425.85 647.35 Q425.8 646.95 425.9 646.7 L426.4 646.15 Q426.75 645.95 427.15 646.15 L427.55 646.5 427.7 647 Q427.85 648.2 426.95 649.75 L426.8 650 426.75 650.1 426.8 650.1 426.7 650.35 427.3 650 428.25 649.75 428.7 649.7 429.2 649.75 429.7 650.2 429.7 650.85 429.3 651.3 428.65 651.35 Q427.2 651.15 426.15 651.7 L425.85 651.85 424.85 653.1 424.65 653.35 424.8 653.25 425.8 652.95 426.75 652.85 427.2 652.9 Q427.5 652.95 427.65 653.1 428.05 653.35 428.05 653.8 L427.8 654.55 427.3 654.8 426.45 654.8 423.7 654.35 423.5 654.4 423.1 654.7 423.5 654.65 424.2 654.65 424.2 654.7 424.55 654.75 424.85 654.95 425.1 655.5 424.8 656.05 424.4 656.2 423.8 656.1 Q422.8 655.6 421.85 655.5 L421.75 655.5 Q420.05 656.45 417.95 656.65 L416.95 656.7 417.35 656.85 418.35 657.25 419.1 657.85 419.4 658.2 419.6 658.6 Q419.7 659.05 419.45 659.4 419.2 659.7 418.75 659.75 L418.2 659.65 417.6 659.05 Q416.9 657.7 415.8 656.9 L415.4 656.6 414.35 656.4 414.7 656.75 415.1 657.35 415.25 657.65 415.3 658 415 658.55 414.4 658.65 414 658.45 413.7 657.85 Q413.55 656.85 413.05 656.05 L411.95 655.7 410.35 655.05 408.95 654.6 409.05 654.65 409.95 655.2 410.65 655.9 410.9 656.25 411.05 656.7 410.8 657.45 Q410.5 657.7 410.05 657.75 L409.5 657.55 409 656.9 Q408.45 655.45 407.5 654.5 L407.15 654.2 407 654.15 405.5 654.1 404.75 654.6 404.8 654.65 405.05 655.1 404.8 655.6 404.45 655.75 403.95 655.65 403.5 655.45 403.4 655.45 401.7 656.4 402.6 656.35 404.7 656.3 406.65 656.7 407.5 657.05 Q407.95 657.3 408.2 657.7 408.75 658.45 408.6 659.25 408.4 660.05 407.6 660.55 L406.5 660.8 Q405.6 660.8 404.9 660.25 402.45 658.35 399.75 657.75 L398.7 657.6 396.6 658.15 397.55 658.5 398.8 659.2 399.35 659.65 399.75 660.3 399.8 661.2 400.1 661.05 400.9 661.15 401.3 661.85 401.25 662.3 401.05 662.75 400.5 663.5 399.75 664.25 399.4 664.55 400.35 664.25 404.35 664.1 404.4 664.05 Q405.3 663.7 406.05 662.9 L406.05 662.85 406.6 662.55 407.05 662.6 407.5 663 407.45 663.6 407.2 663.9 406.9 664.1 406.25 664.35 405.85 664.4 406.35 664.6 406.55 664.55 Q407.85 664.2 409 663.25 409.35 662.95 409.8 662.95 L410.35 663.05 410.85 663.7 410.7 664.45 410.35 664.75 409.9 664.95 409.95 664.95 409 665.2 407.95 665.2 407.75 665.2 408 665.35 409.4 666.25 409.7 666.3 Q410.85 666.45 412.2 665.75 L412.8 665.6 Q413.15 665.65 413.35 665.9 L413.55 666.55 413.25 667.15 413.2 667.15 412.8 667.35 412.35 667.45 411.4 667.5 410.65 667.35 410.85 667.55 410.9 667.65 411.1 667.85 Q412.5 669.05 412.7 670.2 L412.7 670.75 412.45 671.2 411.75 671.45 411.1 671.05 410.85 670.5 410.75 669.9 410.4 668.45 410.2 668.05 409.9 667.7 410 668.05 410 668.45 409.75 668.75 409.25 668.95 408.8 668.65 408.6 668.2 408.55 667.8 408.35 666.85 408.15 666.3 Q407 665.6 405.7 665.2 L404 664.85 404.8 665.6 405.45 666.75 405.6 667.2 405.65 667.75 405.25 668.3 404.6 668.4 404.1 668.1 403.95 667.5 Q403.9 666 403.25 665 L403 664.75 400.35 665.05 399.65 665.25 400.6 665.55 400.9 665.65 401.15 665.85 401.4 666 401.6 666.3 401.55 666.8 401.15 667.15 400.75 667.15 400.35 666.8 Q399.75 665.9 398.85 665.7 L398.65 665.65 Q397.25 666.25 395.9 667.35 L395.7 667.5 Q397.45 667.05 398.5 667.5 398.8 667.55 398.95 667.75 L399.2 668.25 399 668.95 398.35 669.3 397.75 669.2 397.15 668.95 395.8 668.45 394.8 668.3 394.75 668.3 394.65 668.4 394.65 668.45 393.35 669.5 390.9 671 392.05 671.35 392.4 671.55 392.7 671.7 392.75 671.7 393 671.95 393.25 672.3 393.2 672.95 392.7 673.35 392.25 673.3 391.7 672.85 Q390.95 671.75 389.9 671.4 L389.85 671.4 389.8 671.4 388.2 671.7 389.8 673 390.1 673.35 390.4 673.75 390.6 674.15 390.7 674.65 390.7 674.75 391.2 675.25 391.45 675.55 391.5 675.55 393.55 675.4 396.45 674.65 397.6 674.25 398.9 674.2 Q399.75 674.45 400.15 675 400.65 675.65 400.4 676.45 L399.85 677.4 Q399.45 677.75 398.9 677.9 396.65 678.6 393.2 677.35 L393.55 677.65 Q396.1 680.1 398.9 681.65 L399.3 681.6 Q401.1 681.25 402.45 679.65 L402.45 679.6 Q402.85 679.15 403.4 679 403.85 678.85 404.15 679 404.75 679.25 404.95 679.75 405.2 680.3 404.9 680.85 L404.45 681.35 403.95 681.7 403.35 681.95 402.75 682.15 400.8 682.6 401.65 682.95 402.85 683.35 403.3 683.3 Q404.7 683 405.75 681.8 L406.4 681.3 407 681.3 407.55 681.85 Q407.7 682.25 407.5 682.65 L407.2 683 406.8 683.25 406.4 683.45 405.95 683.6 404.85 683.85 407.5 684.2 408 683.7 Q409.6 681.9 409.9 678.85 409.85 678.2 410.3 677.65 410.75 677.15 411.45 677.05 412.15 677 412.75 677.45 413.3 677.9 413.35 678.65 L413.25 679.65 413.25 679.7 412.85 680.6 Q412.35 681.85 411.35 682.85 L409.5 684.25 413.05 683.8 Q415.8 683.25 418.25 681.95 L418.75 681 419.3 679.05 419.5 678.2 Q419.7 677.6 419.95 677.35 420.45 676.9 420.95 676.9 421.5 676.8 421.95 677.3 L422.3 678 422.25 678.8 422 679.45 422.7 678.85 423.15 678 Q423.8 676.7 424.1 675.2 L424.4 674 Q424.65 673.2 425.1 672.85 L425.05 672.85 Q425.75 672.3 426.45 672.25 427.2 672.2 427.8 672.85 L428.25 673.8 428.15 674.9 Q427.5 677.2 424.5 679.4 L424.05 679.75 423.85 679.9 423.9 679.9 423.45 680.3 424.95 680.15 426.9 680.45 427.8 680.7 428.65 681.2 428.65 681.25 Q429.2 681.75 429.2 682.45 429.25 683.15 428.7 683.7 428.25 684.2 427.5 684.25 426.8 684.3 426.3 683.8 423.75 682.2 421.35 682.3 L420.7 682.35 417.8 683.9 417.2 684.15 417.55 684.15 419.7 684.4 421.55 685.05 422.35 685.5 422.4 685.5 423.05 686.2 Q423.5 687 423.2 687.8 422.95 688.55 422.1 688.95 L420.95 689.1 Q420.05 689 419.4 688.35 417.2 686.2 414.6 685.3 L414.2 685.15 413.2 685.4 414.05 685.65 415.35 686.3 415.3 686.3 415.9 686.7 416.3 687.3 416.3 687.35 Q416.55 688 416.25 688.55 L415.3 689.3 414.4 689.3 413.35 688.6 Q411.95 686.8 410.15 685.85 L410.1 685.8 408.6 685.85 408.55 685.95 408.2 686.1 407.8 686.15 407.4 686.15 407 686.15 405.85 685.9 407.25 688.4 407.8 689.95 407.85 690.15 407.9 690.15 408.85 690.55 410.25 690.8 410.85 690.85 411.45 691.1 411.85 691.7 Q411.95 692.1 411.65 692.4 L411.25 692.7 410.7 692.75 Q409.55 692.6 408.3 691.3 L408.35 691.55 Q409 693.15 409.9 694.4 L410.1 694.45 411.9 694.25 412.45 694.15 412.8 694.3 413 694.85 412.75 695.3 412.45 695.45 412.15 695.5 411.85 695.45 411.55 695.45 410.55 695.2 411.1 695.75 413.2 697.35 413.55 697.25 Q414.65 696.75 415.4 695.45 L415.8 695 416.45 694.95 416.95 695.4 417 696.05 416.7 696.5 416.35 696.85 415.2 697.55 414.1 697.75 415.8 698.3 418.45 698.55 418.9 698.25 419.55 697.5 419.8 697.15 420.2 696.85 420.75 696.85 421.1 697.25 421.1 697.65 420.9 698 420.65 698.25 421.1 698.1 421.5 697.8 422.5 696.75 422.85 696.3 Q423.15 696 423.4 695.9 L424.15 695.95 424.6 696.5 424.65 697 424.35 697.45 Q423.55 698.35 421.8 698.7 L421.5 698.75 421.4 698.8 421.15 698.9 421.85 699.15 Q422.3 699.35 422.65 699.65 L423 700 423.25 700.4 423.25 701.05 422.8 701.5 422.15 701.5 421.7 701.05 Q420.9 699.8 419.8 699.35 L419.5 699.25 417.85 699.35 417.55 699.35 417.7 699.4 418.6 699.95 419.3 700.6 419.6 701 419.75 701.45 419.45 702.2 418.7 702.45 418.2 702.3 417.65 701.65 Q417.15 700.25 416.15 699.3 L416 699.15 415.5 699.05 415.85 699.35 416.3 699.9 416.25 699.9 416.45 700.2 416.5 700.55 416.2 701.1 415.65 701.25 415.25 701.05 414.9 700.5 Q414.7 699.4 414.05 698.6 412.2 697.85 410.65 696.45 L410 695.75 410.15 696.15 410.45 697.15 410.55 698.1 410.45 698.55 410.25 699 409.6 699.4 408.85 699.1 Q408.65 698.95 408.6 698.6 408.45 698.2 408.6 697.8 409.15 696.35 409.05 695 L409 694.5 408.45 693.6 408.45 694.05 408.3 694.75 408.15 695.1 407.9 695.35 407.3 695.45 406.85 695.1 406.75 694.65 406.95 694.05 407.85 692.35 407.45 691.3 406.85 689.65 406.3 688.3 406.35 688.45 406.5 689.5 406.45 690.45 406.35 690.9 406.1 691.3 405.35 691.55 Q404.95 691.55 404.65 691.2 L404.45 690.65 404.6 689.85 Q405.35 688.5 405.45 687.15 L405.45 686.7 405.35 686.6 404.45 685.4 403.55 685.2 403.35 685.7 402.85 685.85 402.5 685.7 402.2 685.2 402.05 684.75 402 684.7 400.2 684.05 400.8 684.65 402.2 686.25 402.25 686.25 403.2 687.95 403.5 688.85 403.5 689.8 Q403.3 690.7 402.55 691.1 L400.95 691.2 400.45 690.95 400.15 691.15 400.15 691.1 399.8 691.15 399.4 691.1 398.8 690.8 398.45 690.6 398.65 691 398.8 691.15 Q400 691.85 401.5 692 L402.25 692.3 402.55 692.8 402.5 693.6 401.8 694.05 401.35 694 400.9 693.85 400.95 693.85 400.1 693.35 399.35 692.6 399.2 692.45 399.3 692.75 399.65 694.35 399.85 694.6 Q400.5 695.55 401.95 696 L402.5 696.35 402.7 696.95 402.35 697.55 401.75 697.7 401.7 697.7 401.25 697.55 400.85 697.3 400.15 696.65 399.75 696.05 399.7 696.35 399.7 696.45 399.7 696.7 399.7 696.75 Q399.85 698.55 399.2 699.55 L398.8 699.9 398.3 700.05 397.65 699.7 397.45 699 397.65 698.4 398 697.9 398.8 696.65 398.95 696.2 398.95 695.75 398.8 696.05 398.5 696.35 398.1 696.4 Q397.8 696.45 397.65 696.2 L397.5 695.65 397.7 695.2 397.95 694.9 398.5 694.05 398.7 693.55 Q398.4 692.2 397.75 691 L396.8 689.55 396.85 690.7 396.5 691.95 396.25 692.4 395.95 692.8 395.25 692.9 394.75 692.55 394.6 691.9 394.9 691.4 Q395.95 690.35 396.15 689.15 L396.2 688.8 Q395.25 687.8 394.1 687.15 L393.45 686.8 393.9 687.65 394.05 687.95 394.1 688.25 394.15 688.55 394.1 688.9 394.1 688.85 393.7 689.25 393.15 689.2 392.9 688.9 392.85 688.35 Q393.05 687.3 392.6 686.55 L392.5 686.35 Q391.05 685.8 389.3 685.6 L389.05 685.6 Q390.6 686.45 391.1 687.55 L391.2 688.1 391 688.6 390.4 688.95 389.7 688.7 389.3 688.2 389.1 687.65 388.5 686.3 387.85 685.5 387.65 685.5 386 685.3 383.2 684.65 383.75 685.7 383.9 686.1 384 686.45 384.05 686.85 383.95 687.25 383.45 687.7 382.8 687.6 382.5 687.25 382.45 686.55 Q382.7 685.25 382.15 684.25 L382.15 684.15 380.8 683.25 Q381.1 684.2 381 685.3 L380.95 685.8 380.9 686.25 380.75 686.7 380.5 687.1 380.4 687.15 380.4 687.85 380.4 687.9 380.4 688.25 380.45 688.3 381.95 689.65 384.55 691.15 385.65 691.7 386.6 692.6 Q387.05 693.35 386.9 694.05 386.8 694.85 386.05 695.25 L385.05 695.5 384 695.2 Q381.9 694.1 380.35 690.8 L380.35 691.25 Q380.45 694.75 381.35 697.85 L381.65 698.05 Q383.15 699.1 385.25 698.95 L385.3 698.95 386.35 699.15 386.95 699.7 Q387.15 700.25 386.95 700.8 386.75 701.35 386.15 701.55 L385.45 701.55 384.85 701.45 384.25 701.2 383.7 700.95 382 699.85 382.35 700.7 382.95 701.85 383.3 702.15 Q384.45 702.9 386.05 702.75 L386.9 702.9 387.3 703.3 387.3 704.1 386.7 704.6 386.25 704.65 385.8 704.55 385.35 704.4 384.9 704.2 384 703.65 385.6 705.75 386.3 705.75 Q388.7 705.55 391.05 703.65 391.5 703.15 392.2 703.1 392.9 703.05 393.45 703.5 394 703.95 394.1 704.65 394.15 705.35 393.7 705.95 L392.85 706.6 391.95 707 389.25 707.5 387 707.2 389.85 709.4 Q392.15 710.9 394.75 711.75 L395.85 711.4 397.6 710.45 398.35 710 Q398.9 709.7 399.25 709.7 L400.3 710.05 Q400.75 710.45 400.7 711.05 L400.45 711.8 399.85 712.35 399.25 712.65 400.15 712.7 401.05 712.45 Q402.4 711.95 403.7 711.1 L404.75 710.5 406.05 710.15 Q406.9 710.2 407.45 710.65 408.05 711.2 407.95 712.05 L407.6 713.05 Q407.3 713.55 406.8 713.75 404.65 714.9 401.05 714.35 L401 714.35 400.45 714.25 400.2 714.25 399.65 714.25 400.85 715.25 401.95 716.75 402.4 717.6 402.65 718.6 Q402.7 719.3 402.2 719.85 401.7 720.35 400.95 720.4 400.25 720.4 399.75 719.9 399.2 719.45 399.15 718.75 398.55 715.8 396.75 714.2 L396.25 713.75 393.1 712.8 392.5 712.55 392.75 712.85 394.1 714.5 394.95 716.25 395.2 717.15 395.15 718.15 Q394.9 719 394.15 719.4 393.45 719.75 392.55 719.4 L391.65 718.7 Q391.1 718 391.1 717.1 391.05 714 389.85 711.5 L389.7 711.15 388.8 710.6 389.2 711.35 389.65 712.75 389.75 713.45 389.6 714.15 389.6 714.2 Q389.3 714.8 388.7 715 L387.5 714.85 386.9 714.2 Q386.55 713.65 386.65 712.95 386.95 710.7 386.3 708.8 L386.35 708.8 386.3 708.7 385.25 707.7 385.1 707.7 384.75 707.55 384.45 707.35 384.15 707.05 383.9 706.75 383.25 705.75 382.45 708.5 381.75 710.05 381.65 710.2 382.05 711.15 382.9 712.35 383.3 712.8 383.55 713.4 383.4 714.15 382.75 714.5 382.25 714.4 381.85 714.05 Q381.1 713.1 381.15 711.3 L381.05 711.5 Q380.35 713.1 380.1 714.65 L380.2 714.85 Q380.65 715.6 381.65 715.95 L382.05 716.25 382.2 716.65 382 717.15 381.45 717.3 381.5 717.3 381.15 717.2 380.9 717 380.7 716.75 380.5 716.55 380 715.7 379.95 716.45 Q380 717.75 380.35 719.05 L380.65 719.2 383.2 719.25 383.25 719.25 Q383.55 719.1 383.85 719.25 384.15 719.35 384.35 719.7 L384.35 720.35 383.95 720.85 383.45 720.95 382.95 720.9 381.65 720.6 380.7 720 381.5 721.55 Q382.2 722.7 383.2 723.65 L383.75 723.7 384.75 723.65 385.15 723.6 385.6 723.65 386 724.05 386 724.55 385.75 724.85 385.35 724.95 385 724.95 385.4 725.2 385.85 725.25 387.3 725.2 387.9 725.15 388.55 725.25 389.05 725.8 Q389.25 726.15 389.05 726.5 L388.65 726.9 388.15 727.05 Q386.95 727.1 385.45 726.1 L385.2 725.95 385.1 725.9 384.85 725.8 385.2 726.45 385.35 727.35 385.4 727.85 385.3 728.35 384.85 728.75 384.85 728.8 384.15 728.75 383.75 728.3 383.7 727.65 Q384.05 726.25 383.55 725.15 L383.45 724.85 382.25 723.75 382 723.55 382.05 723.7 382.3 724.75 382.35 725.7 382.3 726.15 382.05 726.55 Q381.75 726.9 381.35 726.9 380.95 726.9 380.6 726.6 L380.35 726.1 Q380.25 725.65 380.45 725.25 381.1 723.9 381.05 722.5 L381.05 722.3 380.75 721.9 380.8 722.3 380.8 722.35 380.7 723.05 380.7 723 380.6 723.35 380.4 723.65 379.85 723.85 379.35 723.55 Q379.2 723.4 379.2 723.1 L379.35 722.5 Q379.9 721.55 380.05 720.6 L380.05 720.55 Q379.25 718.7 379.2 716.6 L379.2 715.65 379.05 716.05 378.55 717 377.9 717.7 377.55 718 377.1 718.15 376.35 717.95 Q376.05 717.7 376.05 717.25 L376.2 716.7 376.8 716.1 Q378.2 715.5 379.1 714.5 L379.4 714.05 379.65 713.05 379.3 713.4 378.7 713.75 378.35 713.9 378 713.9 377.5 713.55 377.45 712.95 377.65 712.6 Q377.9 712.35 378.25 712.35 L380.1 711.8 380.55 710.7 381.3 709.15 381.85 707.8 381.8 707.9 381.15 708.75 380.45 709.4 380.05 709.65 379.6 709.75 Q379.15 709.75 378.9 709.45 378.65 709.15 378.65 708.65 L378.9 708.15 379.55 707.65 Q381 707.25 382.05 706.35 L382.4 706.05 382.45 705.9 382.6 704.4 382.15 703.65 382.1 703.65 381.6 703.85 381.15 703.6 Q381 703.5 381 703.25 381 702.95 381.15 702.75 L381.4 702.3 381.35 702.2 380.55 700.45 380.55 701.3 380.4 703.45 380.45 703.45 379.9 705.35 379.5 706.15 378.8 706.85 Q378.05 707.35 377.25 707.1 376.45 706.9 376 706.05 L376 706.1 Q375.75 705.65 375.85 704.9 375.9 704.05 376.5 703.35 378.55 701.05 379.3 698.4 L379.55 697.35 379.15 695.25 378.75 696.15 377.95 697.35 377.45 697.85 376.8 698.2 375.6 698.05 Q375.1 697.7 374.95 697 374.85 696.6 375.1 696.1 375.35 695.45 375.9 695.15 377.75 694.05 378.85 692.5 L378.75 690.2 378.75 690.15 378.8 686.65 378.7 683.7 378.65 683.9 378.25 686 378.25 686.05 377.45 687.85 376.95 688.6 376.15 689.2 Q375.35 689.6 374.6 689.2 373.85 688.9 373.55 688.05 373.35 687.55 373.5 686.85 373.65 686 374.35 685.4 376.7 683.4 377.8 680.85 L378.15 679.95 378.1 679.7 377.05 676.55 Q376.3 674.9 375.35 673.7 L375.1 673.4 375.35 674 375.3 674 375.55 674.55 375.65 675.15 375.6 675.85 374.85 676.6 373.75 676.55 373.2 676 373.05 674.9 Q373.3 672.85 372.35 671.3 L372.2 671.1 370.7 670.4 Q370.8 672.5 370.3 674.5 L370.55 675.4 Q371.55 678.1 374.45 679.7 L375.6 680.9 Q375.9 681.55 375.8 682 375.6 682.95 374.95 683.35 L373.35 683.55 372.5 683.05 371.85 682.4 371.35 681.55 370.85 680.75 Q369.75 678.7 369.5 676.75 L367.8 679.55 367.8 679.7 Q367.65 682.05 369.25 684.25 369.7 684.85 369.75 685.55 L369.5 686.45 Q369.05 687.1 368.4 687.15 367.65 687.3 367.1 686.8 L366.6 686.15 366.35 685.4 366.25 684.6 366.15 683.8 Q366.05 682.5 366.25 681.35 L364.6 682.9 Q364.55 683.7 365.05 684.5 L365.2 685.05 365.05 685.4 364.6 685.65 Q364.3 685.65 364.1 685.45 L363.95 685.2 363.85 684.9 363.85 684.6 363.85 684.55 363.8 684.3 363.75 684.45 Q363.6 685.2 363.6 686.1 L363.75 687.7 363.8 687.85 364.15 688.15 Q365.2 689.05 366.65 689.45 L367.3 689.95 367.55 690.45 Q367.6 690.95 367.3 691.25 L366.6 691.55 366.15 691.45 365.75 691.2 365.05 690.55 364.4 689.7 364.35 689.6 364.9 690.95 365.65 692.5 366.1 693.55 Q366.9 694 367.95 694.1 L368.55 694.4 368.75 694.75 368.7 695.35 368.2 695.7 367.85 695.65 367.5 695.55 366.9 695.15 366.55 694.85 366.8 695.85 367.1 696.3 Q368 697.3 369.4 697.9 369.8 698.1 370 698.45 L370.15 699.05 369.85 699.75 369.1 699.95 368.65 699.8 368.3 699.5 367.65 698.75 367.15 697.85 367 697.45 367 698.4 Q366.95 700.5 366.1 702.35 L366.15 702.35 Q366.25 703.35 366.85 704.3 L367 704.9 366.85 705.3 366.35 705.65 365.8 705.45 365.6 705.15 365.5 704.85 365.4 704.1 365.4 703.7 365.15 704.1 365.15 704.35 Q365.1 705.7 365.75 707.05 365.95 707.5 365.8 707.9 L365.55 708.4 364.85 708.7 Q364.45 708.7 364.15 708.35 L363.9 707.95 363.85 707.5 363.85 706.55 364.15 705.5 364.2 705.35 363.95 705.55 362.75 706.65 362.6 706.95 Q362.15 708 362.45 709.45 L362.5 710.1 362.05 710.55 361.35 710.6 360.9 710.15 360.9 710.1 360.8 709.65 360.8 709.15 361 708.25 361.35 707.55 361.1 707.7 361 707.75 360.75 707.9 Q359.25 708.9 358.05 708.85 L357.55 708.7 357.15 708.3 Q356.95 707.95 357.1 707.6 357.25 707.25 357.65 707.05 L358.25 706.95 358.9 707 360.3 707.05 360.8 707 361.2 706.75 360.85 706.75 360.45 706.65 360.2 706.35 Q360.05 706.1 360.2 705.85 L360.55 705.45 361.05 705.4 361.45 705.45 362.45 705.5 363 705.45 364.7 703.35 365.5 701.8 364.55 702.4 363.25 702.75 362.8 702.75 362.25 702.65 361.85 702.15 Q361.7 701.8 361.85 701.5 L362.35 701.05 362.95 701.1 362.95 701.05 365.5 701 365.8 700.85 Q366.2 699.55 366.25 698.25 L366.2 697.5 365.7 698.35 365.5 698.6 365.3 698.8 365.05 699 364.75 699.1 364.2 698.95 364 698.45 364.1 698.1 364.55 697.75 Q365.55 697.4 366 696.65 L366.1 696.45 Q365.85 694.9 365.15 693.3 L365.05 693.1 Q365.05 694.9 364.35 695.85 L363.95 696.2 363.45 696.3 Q363.05 696.25 362.8 695.9 362.65 695.65 362.65 695.2 L362.9 694.6 363.3 694.15 364.15 692.95 364.5 692.05 364.55 692 364.45 691.8 363.75 690.3 Q363.2 688.95 362.95 687.55 L362.3 688.55 362.05 688.85 361.75 689.15 361.45 689.35 361.05 689.5 360.45 689.3 360.2 688.7 360.35 688.25 Q360.55 687.95 360.9 687.85 362.15 687.45 362.8 686.45 L362.8 686.35 Q362.8 685.55 362.95 684.8 362.3 685.5 361.3 685.95 L361.25 686 360.85 686.2 360.4 686.4 359.95 686.45 359.5 686.4 359.4 686.4 358.75 686.7 358.75 686.75 358.4 686.9 358.4 687 357.95 689 Q357.8 690.4 357.95 691.95 L358.05 693.2 357.75 694.45 Q357.3 695.2 356.65 695.45 L355.2 695.35 Q354.75 695.05 354.45 694.55 L354.2 693.5 Q354.1 691.15 356.2 688.15 L355.8 688.4 Q352.8 690.25 350.6 692.5 L350.55 692.9 Q350.4 694.75 351.6 696.5 L351.95 697.55 351.8 698.3 351.75 698.3 350.85 698.9 Q350.25 698.95 349.8 698.55 L349.4 698 349.2 697.4 349.1 696.75 349.1 696.15 Q349 695.05 349.2 694.1 L348.65 694.85 347.9 695.9 347.85 696.35 Q347.75 697.8 348.7 699.1 L348.95 699.9 348.8 700.4 Q348.55 700.8 348.15 700.85 347.75 700.9 347.4 700.6 L347.1 700.2 347 699.75 346.9 699.3 346.9 698.8 346.9 697.7 345.9 700.2 346.25 700.8 Q347.6 702.8 350.4 703.85 L350.45 703.85 Q351.1 704 351.5 704.55 351.85 705.15 351.75 705.85 L351.75 705.8 Q351.65 706.55 351.05 707 L349.75 707.3 348.8 706.9 348.75 706.9 347.95 706.3 Q346.9 705.45 346.2 704.25 L345.35 702.15 Q344.95 703.85 344.85 705.65 344.7 708.45 345.25 711.1 L346.1 711.9 347.8 712.95 348.55 713.35 349.3 714 Q349.55 714.55 349.45 715.05 349.4 715.65 348.85 715.9 L348.05 716.1 347.3 715.85 346.7 715.45 347.15 716.25 347.8 716.9 Q348.9 717.85 350.3 718.55 L351.35 719.15 352.25 720.1 352.25 720.05 Q352.7 720.9 352.55 721.55 352.35 722.35 351.6 722.7 L350.55 722.9 349.5 722.55 Q347.45 721.3 346.15 717.85 L345.9 717.3 345.8 717.1 345.55 716.6 345.3 718.1 344.5 719.85 344 720.65 343.3 721.4 343.25 721.4 341.95 721.6 Q341.25 721.45 340.85 720.8 340.5 720.2 340.65 719.5 340.8 718.8 341.4 718.4 343.65 716.4 344.15 714.05 L344.25 713.4 Q343.75 711.85 343.5 710.2 L343.45 709.55 343.3 709.9 342.5 711.9 341.45 713.55 340.8 714.2 339.95 714.65 Q339.05 714.9 338.35 714.4 337.7 713.95 337.5 713.05 337.4 712.55 337.7 711.9 338 711.05 338.8 710.6 341.45 709.05 343 706.75 L343.25 706.4 343.25 705.35 342.8 706.1 342.8 706.15 341.85 707.2 341.25 707.65 340.6 707.85 Q339.9 707.95 339.45 707.5 338.95 707.1 338.9 706.4 338.9 706 339.2 705.55 339.5 704.95 340.15 704.7 342.25 703.8 343.6 702.3 L343.65 702.25 344 700.85 343.95 700.75 343.85 700.35 343.9 699.95 344 699.6 344.15 699.2 Q344.35 698.6 344.7 698.15 L341.9 698.85 340.25 699 340.05 699 340.05 699.05 339.45 699.8 Q339.05 700.4 338.8 701.15 L338.6 701.7 338.2 702.2 337.5 702.45 Q337.1 702.45 336.9 702.1 L336.7 701.55 336.8 701.05 Q337.25 699.95 338.8 699.1 L338.6 699.1 Q336.85 699.3 335.4 699.85 L335.3 700.05 Q334.85 700.8 335.05 701.85 L335 702.4 334.75 702.7 334.2 702.75 333.8 702.35 333.8 702.4 333.75 702.05 333.8 701.75 333.85 701.45 334 701.15 Q334.15 700.65 334.45 700.3 L333.8 700.65 331.7 702.3 331.75 702.65 Q331.95 703.8 333 704.9 L332.95 704.9 333.3 705.4 333.2 706.05 332.6 706.4 331.95 706.3 331.6 705.9 331.4 705.45 331 704.15 331.05 703.05 330.1 704.55 Q329.5 705.75 329.15 707.05 L329.4 707.55 329.95 708.4 330.2 708.7 330.35 709.15 330.25 709.7 Q330.1 709.9 329.75 709.95 L329.4 709.85 329.1 709.55 328.95 709.25 328.95 709.75 329.1 710.15 329.85 711.4 330.25 711.9 330.45 712.5 330.25 713.2 329.6 713.55 329.1 713.4 328.7 713 Q328.05 712.05 328.2 710.25 L328.2 709.95 328.2 709.8 328.15 709.85 328.15 709.55 327.75 710.2 327.05 710.8 326.65 711.05 326.15 711.2 325.55 711.05 325.2 710.45 325.4 709.85 Q325.6 709.55 325.95 709.5 327.35 709.05 328.05 708.1 L328.25 707.85 Q328.35 707.05 328.6 706.3 L328.7 705.95 328.55 706.1 327.8 706.85 326.95 707.35 326.55 707.5 326.05 707.5 325.4 707.1 Q325.2 706.75 325.35 706.3 L325.65 705.8 Q325.95 705.5 326.4 705.5 327.9 705.35 329.1 704.65 L329.25 704.55 329.5 704.05 329.1 704.3 328.45 704.6 328.5 704.6 328.15 704.65 327.75 704.6 327.75 704.65 Q327.45 704.55 327.3 704.25 L327.35 703.65 327.65 703.3 328.2 703.1 328.25 703.15 330.25 702.8 330.3 702.75 Q331.45 701.15 333.25 700.05 L334.1 699.6 333.65 699.65 332.6 699.65 331.65 699.5 331.25 699.35 330.85 699.05 Q330.6 698.7 330.7 698.3 330.75 697.9 331.15 697.65 L331.7 697.5 Q332.15 697.45 332.5 697.75 333.7 698.65 335.05 698.9 L335.55 699 336.55 698.7 336.1 698.55 335.45 698.2 335.5 698.2 335.2 698 335.05 697.7 335 697.7 Q334.9 697.35 335.05 697.1 335.2 696.8 335.55 696.7 L336 696.7 336.5 697.1 Q337.1 697.95 337.9 698.45 L339.05 698.3 340.75 698.15 342.2 698 342.1 697.95 341.05 697.85 340.15 697.55 339.75 697.3 339.4 696.95 Q339.2 696.6 339.35 696.2 L339.85 695.6 340.45 695.55 Q340.85 695.6 341.2 695.9 342.3 696.95 343.55 697.4 L344 697.55 344.15 697.5 345.55 696.9 345.95 696.1 345.5 695.75 345.5 695.25 345.75 694.95 346.3 694.85 346.75 694.8 346.8 694.75 347.95 693.15 347.2 693.6 345.3 694.55 343.35 695.05 342.45 695.1 341.5 694.85 Q340.7 694.4 340.5 693.65 340.3 692.85 340.8 692.05 341.05 691.6 341.7 691.3 L343.35 691.1 Q346.4 691.7 349.1 691.05 L350.1 690.75 351.7 689.35 350.75 689.45 349.3 689.35 348.6 689.2 348 688.8 Q347.5 688.3 347.55 687.65 347.6 687.05 348.15 686.6 348.4 686.3 348.95 686.25 L350.2 686.5 Q352.05 687.5 353.95 687.75 L355.95 686.5 359 684.75 361.5 683.15 361.3 683.25 359.25 683.95 357.3 684.15 356.4 684.1 Q355.9 684 355.5 683.7 354.75 683.2 354.65 682.4 354.6 681.6 355.2 680.85 355.5 680.45 356.15 680.25 357 679.95 357.85 680.25 360.8 681.25 363.55 681 L364.5 680.85 364.65 680.65 366.9 678.15 368.5 675.25 368.6 674.9 368.25 675.4 367.85 675.9 367.4 676.3 366.75 676.55 365.7 676.3 Q365.3 675.95 365.25 675.3 365.15 675 365.45 674.55 L366.3 673.9 366.3 673.85 Q368.25 673.05 369.1 671.45 L369.2 671.25 369.05 669.55 Q367.25 670.75 365.25 671.3 L364.65 671.95 Q362.8 674.2 362.85 677.5 362.8 678.4 362.4 679.1 L361.5 679.8 359.95 679.7 Q359.15 679.35 358.95 678.45 L358.95 677.45 359.25 676.6 359.7 675.7 360.15 674.9 Q361.35 672.9 362.9 671.7 L359.65 671.65 359.5 671.75 Q357.4 672.8 356.3 675.25 L355.45 676.3 354.55 676.6 Q353.75 676.5 353.35 675.95 352.85 675.4 353.05 674.65 L353.35 673.9 353.9 673.3 354.5 672.8 355.15 672.35 Q356.25 671.6 357.3 671.2 L355.15 670.55 Q354.45 670.9 353.95 671.75 L353.6 672.15 353.2 672.2 352.75 671.95 352.7 671.4 352.85 671.1 353.05 670.9 353.3 670.75 353.3 670.7 353.6 670.55 353.4 670.6 Q352.65 670.8 351.9 671.25 L350.6 672.25 350.5 672.3 350.4 672.8 Q350.1 674.15 350.5 675.6 L350.4 676.45 350.1 676.9 349.3 677.05 Q348.9 677 348.7 676.6 L348.55 676.15 348.55 675.7 348.75 674.75 349.15 673.8 349.25 673.65 348.35 674.85 347.35 676.25 346.7 677.2 Q346.7 678.1 347.1 679.05 L347.2 679.7 346.95 680.1 346.45 680.3 345.9 680.05 345.7 679.75 345.65 679.4 Q345.6 679.05 345.7 678.7 L345.8 678.2 345 678.95 344.85 679.4 Q344.4 680.7 344.55 682.25 L344.4 683.05 344 683.45 343.2 683.5 Q342.8 683.4 342.65 682.95 L342.55 682.5 342.6 682.05 342.95 681.15 343.5 680.25 343.75 679.9 342.9 680.4 Q341.1 681.4 339.1 681.6 L339.05 681.65 Q338.25 682.25 337.75 683.2 L337.3 683.65 336.9 683.7 336.35 683.45 336.2 682.85 336.25 682.85 336.35 682.55 336.6 682.25 337.15 681.85 337.55 681.65 337.05 681.65 336.85 681.75 Q335.7 682.4 334.8 683.6 L334.15 684.1 333.55 684.15 332.95 683.65 Q332.7 683.3 332.85 682.9 L333.1 682.5 333.5 682.2 Q333.9 681.9 334.3 681.75 L334.35 681.75 335.35 681.45 335.5 681.4 335.2 681.35 333.65 680.85 333.35 680.85 Q332.2 681 331.1 682 L330.55 682.3 329.9 682.15 329.55 681.6 Q329.5 681.25 329.7 680.95 L329.75 680.95 330.1 680.65 330.5 680.45 331.4 680.15 332.15 680.05 331.95 679.9 331.85 679.85 331.6 679.7 Q329.95 678.9 329.4 677.85 L329.3 677.35 Q329.3 677.05 329.45 676.8 329.65 676.45 330.05 676.4 L330.75 676.6 331.15 677.1 331.4 677.65 332.1 678.95 332.4 679.3 332.8 679.55 332.6 679.25 332.5 678.85 332.65 678.45 Q332.8 678.2 333.1 678.2 L333.6 678.35 333.9 678.7 334.05 679.1 334.5 680 334.85 680.45 337.5 680.9 339.25 680.8 338.25 680.25 337.3 679.3 337.05 678.9 336.9 678.4 Q336.85 678.05 337.1 677.75 337.35 677.5 337.7 677.45 L338.3 677.65 338.6 678.2 Q339 679.65 339.95 680.4 L340.2 680.6 Q341.55 680.3 342.7 679.6 L343.35 679.25 342.3 679.2 342.05 679.15 341.7 679.1 341.45 678.95 341.2 678.75 341.05 678.25 Q341.1 677.95 341.4 677.8 L341.75 677.75 342.3 677.95 Q343.05 678.65 343.95 678.65 L344.15 678.65 Q345.4 677.65 346.45 676.25 L346.55 676.05 Q345 676.95 343.85 676.8 L343.35 676.65 343 676.25 Q342.8 675.85 343 675.55 L343.55 675 344.15 674.95 344.75 675.05 346.2 675.15 347.2 675.05 347.25 675.05 347.35 674.9 347.35 674.85 348.35 673.5 350.3 671.45 349.1 671.4 348.7 671.3 348.35 671.2 348 671.05 347.7 670.8 Q347.45 670.5 347.55 670.15 L347.95 669.6 348.4 669.55 349 669.85 Q350.05 670.7 351.2 670.75 L351.25 670.75 352.7 670.05 350.85 669.2 350.8 669.2 350.45 668.95 350.05 668.65 349.75 668.3 349.55 667.85 349.55 667.8 348.95 667.4 348.9 667.4 348.55 667.2 348.5 667.2 346.6 667.85 Q345.25 668.4 344 669.3 L343 670 Q342.25 670.45 341.7 670.4 340.85 670.4 340.3 669.95 339.7 669.5 339.7 668.65 339.7 668.1 340 667.6 340.25 667.1 340.75 666.85 342.8 665.6 346.4 665.9 L346 665.7 Q342.9 664 339.8 663.25 L339.45 663.35 Q337.8 664.2 336.9 666.1 L336.15 666.95 335.4 667.15 334.45 666.6 Q334.1 666.15 334.2 665.55 L334.5 664.95 334.9 664.5 335.45 664.1 335.95 663.7 Q336.85 663.1 337.75 662.8 L336.85 662.7 335.55 662.6 Q335.3 662.7 335.15 662.75 333.85 663.4 333.15 664.85 L332.65 665.5 332.1 665.65 331.4 665.25 Q331.15 664.95 331.25 664.5 L331.45 664.1 331.75 663.7 332.15 663.45 332.5 663.15 333.45 662.6 330.8 663 330.45 663.6 Q329.4 665.75 329.9 668.75 L329.95 668.75 329.8 670 Q329.55 670.65 328.9 670.9 L327.55 670.85 Q326.85 670.55 326.6 669.9 326.45 669.45 326.45 668.85 L326.6 667.85 Q326.8 666.5 327.5 665.25 328.05 664.3 328.9 663.5 327.15 664 325.55 664.85 323.1 666.05 321.05 667.9 L320.8 669 Q320.65 670 320.75 671.05 L320.8 671.9 320.6 672.8 320.55 672.8 319.75 673.5 318.7 673.4 318.15 672.85 Q317.95 672.45 318 672.05 L318.05 671.3 317.55 672.1 317.3 673 Q317.05 674.45 317.15 676 L317.15 677.2 316.8 678.5 Q316.3 679.2 315.65 679.45 L314.2 679.2 313.45 678.35 Q313.25 677.9 313.3 677.3 313.35 674.9 315.7 672.05 L315.65 672 316.05 671.55 316.15 671.35 316.45 670.9 315 671.4 313.1 671.65 312.15 671.6 311.2 671.35 311.15 671.35 Q310.5 671 310.35 670.3 310.1 669.6 310.5 668.95 310.8 668.35 311.5 668.1 L312.8 668.25 317.95 668.4 318.55 668.2 320.95 665.95 321.5 665.55 321.1 665.6 319 665.95 317.05 665.8 316.15 665.6 315.3 665.05 Q314.65 664.4 314.75 663.6 314.8 662.75 315.5 662.15 315.9 661.85 316.6 661.75 317.45 661.6 318.25 662.05 320.95 663.55 323.7 663.8 L324.1 663.8 325.05 663.3 324.15 663.3 322.75 663 322.1 662.75 321.55 662.25 321.5 662.25 Q321.1 661.65 321.25 661.05 321.4 660.45 322 660.05 L322.85 659.85 Q323.5 659.85 324.05 660.25 325.85 661.65 327.85 662.05 L327.85 662.1 327.9 662.1 329.3 661.7 329.4 661.6 329.7 661.3 330.05 661.15 330.4 661.05 330.8 661 332 660.95 330 658.9 329.05 657.5 328.95 657.35 328.9 657.35 327.9 657.2 326.45 657.35 325.85 657.45 325.25 657.35 324.7 656.85 Q324.5 656.5 324.7 656.15 324.8 655.9 325.05 655.75 L325.55 655.55 Q326.7 655.4 328.25 656.3 L328.1 656.15 Q327.1 654.75 325.85 653.75 L325.65 653.75 Q324.75 653.75 323.95 654.45 L323.45 654.65 323.1 654.6 322.75 654.15 322.9 653.6 323.15 653.4 323.45 653.3 323.75 653.25 324.05 653.15 325 653.15 324.4 652.75 Q323.2 652.1 321.9 651.75 L321.65 651.95 Q320.7 652.75 320.3 654.15 L320 654.7 319.4 654.9 Q319.05 654.9 318.8 654.6 318.55 654.35 318.6 654 L318.75 653.5 319 653.1 Q319.4 652.5 319.95 652.1 L320.95 651.6 319.2 651.5 316.55 651.95 316.2 652.4 315.75 653.25 315.6 653.65 315.3 654.05 314.8 654.2 314.35 653.9 314.2 653.55 314.3 653.15 314.5 652.85 314.1 653.1 313.8 653.45 313.1 654.75 312.85 655.3 312.45 655.75 311.75 655.95 311.15 655.55 311 655.05 311.1 654.55 Q311.65 653.45 313.3 652.65 L313.55 652.55 313.65 652.45 313.6 652.45 313.85 652.35 313.1 652.25 312.2 651.95 311.8 651.75 311.4 651.4 311.25 650.8 311.6 650.2 312.2 650.05 312.8 650.4 Q313.9 651.4 315.05 651.5 L315.35 651.55 316.9 651.05 317.2 651 317.05 650.95 316.05 650.65 316 650.65 315.2 650.2 314.85 649.9 314.55 649.5 Q314.4 649.1 314.6 648.7 L315.25 648.25 315.85 648.25 316.5 648.75 Q317.4 650 318.55 650.65 L318.75 650.75 319.25 650.7 318.9 650.55 318.85 650.55 318.3 650.1 318.1 649.85 317.95 649.5 317.9 649.5 Q317.85 649.2 318.05 648.95 318.2 648.7 318.55 648.65 L319 648.75 319.45 649.15 Q319.95 650.15 320.75 650.75 L320.8 650.8 Q322.8 651 324.6 652 L325.45 652.5 325.2 652.15 324.65 651.25 324.3 650.3 324.25 649.9 324.3 649.4 324.9 648.85 325.65 648.95 326.05 649.35 326.25 650.15 Q326.1 651.65 326.55 652.95 L326.7 653.45 327.45 654.15 327.35 653.7 327.35 652.95 327.35 653 327.4 652.65 327.6 652.35 327.55 652.3 Q327.8 652.05 328.1 652.05 328.4 652.05 328.65 652.3 L328.9 652.65 328.8 653.3 Q328.35 654.25 328.35 655.2 L329.05 656.1 330.05 657.55 330.9 658.7 330.85 658.6 330.45 657.65 330.25 656.7 330.25 656.2 Q330.25 656 330.4 655.75 330.6 655.4 331 655.3 331.4 655.25 331.75 655.5 L332.1 655.95 332.2 656.8 Q331.8 658.25 332.05 659.6 L332.2 660.05 332.3 660.15 333.5 661.05 334.4 661 Q334.3 660.7 334.45 660.45 L334.9 660.2 335.3 660.25 335.65 660.65 335.95 661.05 336 661.05 337.95 661.25 337.2 660.8 Q336.25 660.3 335.4 659.65 L334 658.25 333.5 657.45 333.25 656.5 Q333.2 655.6 333.8 655.05 334.4 654.5 335.35 654.5 L336.45 654.9 Q337.15 655.4 337.45 656.25 338.45 659.2 340.35 661.2 L341.1 661.95 343.15 662.6 342.55 661.85 341.9 660.55 341.7 659.85 Q341.65 659.45 341.75 659.1 341.9 658.45 342.5 658.15 343.05 657.9 343.75 658.15 L344.45 658.7 Q344.85 659.2 344.85 659.9 344.9 662 345.65 663.75 L347.7 664.85 347.75 664.85 350.8 666.6 350.75 666.6 353.4 668 353.2 667.9 351.6 666.45 350.4 664.9 350 664.05 349.9 663.1 Q349.95 662.15 350.65 661.7 351.3 661.25 352.2 661.4 352.7 661.45 353.25 661.95 353.9 662.5 354.1 663.4 354.45 665.3 355.2 666.9 L355.2 666.85 Q355.05 666.05 355.65 665.3 355.95 664.95 356.45 664.7 L357.3 664.4 358.25 664.25 359.2 664.1 363.4 664.4 361.5 661.75 361.35 661.7 Q359.2 660.65 356.6 661.25 L355.2 661.2 354.45 660.65 Q354.05 659.95 354.2 659.35 354.35 658.65 355.05 658.3 L355.85 658.1 356.65 658.15 357.4 658.35 358.15 658.6 Q359.45 659 360.45 659.6 L359.65 657.5 357.95 657.25 357.4 657.2 357.1 656.95 357.1 656.45 357.45 656.05 357.75 656 358.05 656.05 358.35 656.15 358.65 656.25 358.5 656.15 Q357.9 655.65 357.05 655.35 356.35 655.05 355.5 654.9 L355.4 654.85 354.95 655.05 Q353.7 655.65 352.75 656.85 L352.8 656.85 352.05 657.3 351.5 657.3 Q351.05 657.15 350.9 656.8 350.7 656.45 350.9 656 L351.15 655.6 351.5 655.35 352.4 654.95 353.4 654.7 353.55 654.65 352.1 654.7 350.35 654.75 349.2 654.75 Q348.45 655.35 347.95 656.25 L347.5 656.7 347.05 656.8 347.05 656.75 Q346.75 656.7 346.55 656.45 346.35 656.2 346.45 655.9 346.45 655.7 346.6 655.55 L346.8 655.3 Q347.05 655.05 347.4 654.9 L347.85 654.7 346.8 654.5 346.3 654.65 Q345 655.1 343.9 656.15 L343.15 656.5 342.6 656.4 342.05 655.85 Q341.9 655.45 342.15 655.05 L342.45 654.7 342.85 654.5 343.8 654.2 344.85 654.1 345.3 654.1 344.4 653.7 Q342.45 652.85 341.1 651.4 L341.05 651.4 339 651.3 339 651.35 338.4 651.25 338.05 650.95 337.95 650.35 Q338.05 650.05 338.35 649.9 L338.7 649.8 339.05 649.85 339.75 650.05 340.1 650.25 339.85 649.8 339.65 649.7 336.9 649.25 336.1 649 335.75 648.55 Q335.55 648.1 335.7 647.75 335.85 647.4 336.3 647.25 L336.8 647.2 337.2 647.3 Q337.7 647.45 338.1 647.7 L338.95 648.35 339.1 648.45 338.95 648.15 338.45 646.65 338.2 646.4 Q337.4 645.55 335.9 645.3 335.55 645.3 335.35 645.05 L335.1 644.45 Q335.05 644.1 335.3 643.85 L335.3 643.8 335.9 643.55 335.95 643.55 336.4 643.7 336.85 643.85 337.6 644.4 338.1 644.95 338.1 644.7 338.1 644.6 338.05 644.3 Q337.7 642.5 338.2 641.45 L338.55 641.05 339.05 640.85 Q339.45 640.8 339.75 641.05 L340 641.75 339.9 642.4 339.6 642.9 339 644.25 338.9 644.7 338.9 645.15 339.05 644.85 339.3 644.5 339.65 644.4 Q339.95 644.35 340.15 644.6 L340.35 645.05 340.25 645.55 340.05 645.9 339.6 646.8 339.45 647.3 Q339.9 648.6 340.7 649.7 L341.85 651.05 341.65 649.95 Q341.6 649.25 341.85 648.6 L342 648.15 342.3 647.75 342.95 647.5 Q343.3 647.55 343.5 647.8 L343.75 648.4 343.5 649 Q342.6 650.15 342.55 651.35 L342.55 651.7 Q343.6 652.55 344.85 653.1 L345.55 653.35 344.95 652.55 344.8 652.3 344.7 652 344.6 651.7 344.6 651.35 344.65 651.35 344.95 650.95 345.5 650.95 345.55 650.95 345.8 651.2 345.95 651.75 Q345.9 652.8 346.4 653.5 L346.55 653.65 349.8 654 350.05 654 Q348.4 653.3 347.8 652.3 L347.6 651.8 347.7 651.25 Q347.9 650.9 348.3 650.85 L349 650.95 349.45 651.45 349.75 651.95 350.55 653.2 351.25 653.9 351.25 653.95 351.45 653.95 351.45 653.9 353.15 653.85 355.95 654.2 355.3 653.2 355.1 652.85 354.95 652.5 354.85 652.1 354.9 651.7 Q355 651.35 355.35 651.2 355.65 651.05 356 651.2 L356.3 651.55 356.45 652.2 Q356.4 653.5 357.05 654.45 L357.1 654.55 358.5 655.25 Q358.15 654.35 358.05 653.25 L358.05 652.75 358.05 652.3 358.15 651.85 358.1 651.85 358.35 651.4 358.4 651.35 358.35 650.65 358.35 650.6 358.3 650.25 358.25 650.2 356.55 649.05 Q355.3 648.35 353.85 647.9 L352.65 647.5 351.6 646.75 Q351.05 646.05 351.1 645.35 351.1 644.55 351.75 644.05 352.2 643.7 352.8 643.65 L353.85 643.8 Q356.05 644.65 358 647.75 L357.95 647.3 Q357.4 643.75 356.15 640.85 L355.8 640.65 Q354.15 639.85 352.1 640.3 L351 640.2 350.35 639.75 350.35 639.7 Q350.05 639.2 350.2 638.65 350.35 638.1 350.9 637.8 L351.55 637.65 352.2 637.75 352.8 637.9 353.4 638.1 Q354.45 638.4 355.25 638.95 L354.75 638.15 354.05 637.1 353.65 636.85 350.8 636.55 350 636.5 349.55 636.2 Q349.35 635.75 349.45 635.4 349.5 635 349.95 634.8 L350.4 634.7 350.85 634.75 351.35 634.85 351.8 635 352.8 635.45 350.9 633.55 350.2 633.65 Q347.8 634.15 345.75 636.35 L344.7 637.05 Q344 637.2 343.4 636.8 L343.45 636.8 Q342.8 636.45 342.65 635.7 342.45 635 342.85 634.4 L343.6 633.65 344.45 633.15 Q345.65 632.5 347.05 632.3 348.15 632.15 349.3 632.3 347.85 631.25 346.25 630.5 343.75 629.3 341.05 628.75 L340.05 629.25 338.4 630.45 337.75 630.95 Q337.25 631.35 336.85 631.35 L335.8 631.15 Q335.3 630.85 335.25 630.2 335.2 629.8 335.4 629.45 L335.9 628.85 Q336.2 628.6 336.5 628.45 L335.6 628.5 Q335.1 628.7 334.75 628.9 333.45 629.55 332.25 630.55 L331.3 631.3 Q330.6 631.75 330.05 631.8 L328.6 631.45 Q327.95 631 327.9 630.15 327.85 629.6 328.15 629.1 L328.85 628.3 Q330.85 626.9 334.5 627 L334.55 627 335.1 627 335.3 626.95 335.9 626.9 334.6 626.1 333.25 624.7 332.7 623.9 332.35 623 Q332.2 622.25 332.65 621.7 333.1 621.1 333.8 621 L335.1 621.3 Q335.65 621.7 335.8 622.4 336.8 625.25 338.75 626.6 L339.35 626.95 342.6 627.5 343.2 627.65 342.9 627.45 341.35 625.95 340.3 624.3 339.95 623.45 339.85 622.5 Q339.95 621.55 340.7 621.15 341.35 620.7 342.25 620.9 342.75 621 343.25 621.45 343.9 622.1 344.05 623 344.45 626.05 345.95 628.4 L346.15 628.7 347.1 629.15 346.6 628.45 346 627.15 345.8 626.45 Q345.75 626.05 345.85 625.7 346.05 625.05 346.6 624.8 L347.85 624.75 348.55 625.3 Q348.95 625.85 348.95 626.5 L348.95 626.55 Q348.95 628.8 349.8 630.65 L349.85 630.7 351.05 631.55 351.15 631.55 351.5 631.65 351.85 631.85 352.15 632.1 352.45 632.35 353.25 633.25 Q353.3 631.85 353.7 630.4 L354.2 628.85 354.25 628.65 354.25 628.6 353.75 627.75 352.75 626.65 352.3 626.25 352 625.7 Q351.9 625.25 352.05 624.95 352.2 624.6 352.6 624.55 L353.15 624.55 353.6 624.85 Q354.4 625.7 354.65 627.45 L354.7 627.25 355.25 624 355.15 623.85 Q354.55 623.15 353.55 622.9 353.25 622.85 353.05 622.65 L352.9 622.3 Q352.85 622 353.05 621.8 353.2 621.55 353.55 621.6 L353.85 621.65 354.1 621.8 354.35 622 354.6 622.2 355.2 622.95 355.15 622.25 Q354.95 620.9 354.4 619.65 L354.1 619.55 351.55 619.85 350.95 619.95 350.4 619.6 Q350.2 619.3 350.3 618.9 350.35 618.55 350.65 618.35 L351.1 618.2 351.6 618.15 352.95 618.3 353.95 618.8 352.95 617.35 351 615.5 350.45 615.5 349.45 615.7 349.1 615.8 348.6 615.8 Q348.3 615.7 348.15 615.45 L348.1 614.95 348.35 614.6 348.7 614.45 349.05 614.4 348.65 614.25 348.15 614.25 346.75 614.45 346.15 614.6 345.5 614.6 344.9 614.1 Q344.7 613.8 344.85 613.4 L345.2 612.95 Q345.4 612.8 345.7 612.75 346.85 612.55 348.45 613.35 L348.7 613.5 348.85 613.5 349.1 613.6 348.7 612.95 348.4 612.05 348.3 611.6 Q348.25 611.3 348.35 611.1 L348.75 610.6 349.4 610.55 349.9 610.95 350 611.6 Q349.85 613.05 350.45 614.05 L350.6 614.35 351.95 615.25 352.2 615.45 352.1 615.3 351.75 614.3 351.6 613.35 351.6 612.9 351.8 612.45 Q352 612.05 352.4 612 352.8 611.95 353.2 612.25 L353.5 612.7 353.55 613.55 Q353.1 615 353.25 616.35 L353.3 616.5 353.65 616.9 353.55 616.5 353.55 615.8 353.6 615.45 353.8 615.15 Q354 614.9 354.35 614.85 L354.9 615.15 355.1 615.5 355 616.15 Q354.5 617.15 354.5 618.15 L354.5 618.2 Q355.55 619.9 355.9 621.95 L356 622.9 356.1 622.5 356.5 621.5 357 620.7 357.35 620.4 357.75 620.15 358.5 620.25 358.95 620.95 358.85 621.5 358.35 622.15 Q357.05 622.95 356.25 624.05 L356 624.5 355.85 625.55 356.2 625.2 356.75 624.75 357.05 624.55 357.4 624.5 357.95 624.8 358.1 625.4 358.1 625.35 357.9 625.75 357.35 626.1 Q356.35 626.35 355.6 626.9 L355.3 628 354.75 629.65 354.35 631.05 354.4 630.95 354.4 630.9 354.9 630 355.55 629.3 355.9 629 Q356.15 628.85 356.35 628.85 L357.1 629.05 357.45 629.75 357.25 630.35 356.65 630.9 Q355.25 631.5 354.35 632.5 L354.05 632.85 354.05 633 354.05 634.5 354.65 635.2 Q354.8 634.95 355.1 634.9 L355.6 635.1 355.8 635.45 355.7 636 355.55 636.45 355.55 636.5 356.6 638.2 356.45 637.3 356.35 635.2 356.3 635.15 356.6 633.25 356.9 632.35 357.5 631.6 Q358.2 631 359 631.1 359.8 631.25 360.35 632 L360.7 633.15 Q360.75 634 360.25 634.75 358.5 637.3 358.05 640.05 L357.95 641.1 358.65 643.15 358.9 642.2 359.55 640.9 360 640.3 Q360.25 640.05 360.6 639.9 L361.8 639.95 Q362.35 640.2 362.55 640.9 L362.55 641.8 Q362.4 642.45 361.85 642.85 360.2 644.15 359.3 645.8 L359.65 648.15 360.1 651.6 360.55 654.55 360.55 654.3 360.7 652.2 Q360.85 651.2 361.25 650.3 L361.7 649.45 Q361.95 649.05 362.35 648.8 363.1 648.3 363.9 648.55 364.7 648.8 365.15 649.6 L365.35 650.75 Q365.25 651.65 364.65 652.3 363.35 653.75 362.55 655.35 363.1 654.75 364 654.8 L364.95 655.05 365.75 655.55 366.45 656.2 367.15 656.9 Q368.75 658.55 369.5 660.35 369.75 658.8 370.4 657.25 L370.35 657.05 Q369.9 654.75 367.75 653.1 367.2 652.6 367 651.95 366.8 651.35 366.95 651 367.25 650.25 367.85 650 L369.2 650.05 369.85 650.55 370.25 651.2 370.6 651.95 370.85 652.7 371.45 655.1 371.45 655.05 Q371.5 654.45 371.8 654.15 L372.3 653.65 372.65 653.2 Q372.5 652.35 371.8 651.7 L371.5 651.25 371.5 650.85 371.9 650.5 372.45 650.55 372.65 650.8 372.8 651.05 372.95 651.35 373 651.65 373 651.45 372.75 649.85 372.15 648.3 372.2 648.3 372.1 648.2 371.7 647.95 Q370.45 647.35 368.95 647.35 368.5 647.35 368.2 647.05 L367.8 646.6 Q367.65 646.2 367.85 645.8 368 645.45 368.45 645.35 L368.9 645.3 369.35 645.45 370.25 645.9 371.05 646.55 371.15 646.65 370.25 645.5 369.1 644.15 368.4 643.25 366.5 643.2 365.85 643.1 365.5 642.8 365.55 642.8 Q365.35 642.5 365.45 642.2 365.5 641.9 365.85 641.75 L366.2 641.65 366.55 641.7 367.2 641.9 367.65 642.1 367.15 641.2 366.7 640.9 Q365.6 640.15 364.1 639.9 363.65 639.85 363.35 639.5 L363.05 639.05 Q362.95 638.6 363.2 638.25 363.4 637.9 363.85 637.85 L364.35 637.9 364.75 638.1 Q365.2 638.3 365.55 638.65 L366.25 639.4 366.55 639.7 366.3 638.8 Q365.8 636.75 366.1 634.8 L366.1 634.75 Q365.7 633.85 364.9 633.1 L364.6 632.55 364.6 632.1 Q364.75 631.75 365.05 631.65 L365.65 631.7 365.9 631.9 366.1 632.2 366.35 632.85 366.45 633.3 366.6 632.8 366.55 632.6 Q366.25 631.3 365.25 630.1 L364.95 629.35 Q364.95 629 365.1 628.8 365.35 628.4 365.7 628.3 L366.5 628.45 366.8 628.8 367 629.2 367.2 630.15 367.25 631.2 367.2 631.4 367.35 631.1 368.25 629.75 368.3 629.45 Q368.5 628.25 367.8 626.95 L367.65 626.35 Q367.65 626 367.95 625.75 L368.6 625.6 Q368.95 625.6 369.15 625.9 L369.35 626.35 369.45 626.8 369.5 627.75 369.4 628.5 369.6 628.3 369.7 628.25 369.85 628.05 369.9 628 Q371.05 626.65 372.25 626.4 L372.75 626.4 373.25 626.7 373.45 627.35 373.45 627.4 373.1 628 372.5 628.3 371.9 628.4 370.5 628.75 370.05 628.9 369.75 629.25 370.05 629.15 370.45 629.15 370.8 629.35 370.95 629.9 370.7 630.35 370.25 630.5 369.8 630.55 368.85 630.8 368.35 631 Q367.6 632.15 367.2 633.45 366.95 634.25 366.85 635.15 L367.6 634.3 Q368.15 633.85 368.8 633.65 L369.25 633.5 369.75 633.5 370.3 633.85 370.45 634.5 370.1 635.05 369.5 635.2 Q368 635.2 367.05 635.9 L366.8 636.15 Q366.75 637.5 367.1 638.8 L367.3 639.5 367.6 638.55 367.7 638.25 367.85 638 368.05 637.75 368.3 637.55 368.85 637.55 369.2 638 369.15 638.35 368.8 638.8 Q367.95 639.4 367.7 640.25 L367.65 640.45 Q368.3 641.9 369.4 643.25 L369.55 643.45 Q369.05 641.7 369.5 640.6 L369.8 640.15 370.25 639.95 370.95 640.15 371.3 640.8 371.2 641.4 371 641.95 370.45 643.35 370.35 644.3 370.35 644.35 370.45 644.5 371.55 645.8 373 648.25 373.4 647.1 373.55 646.75 373.75 646.4 373.95 646.1 374.3 645.9 375 645.95 375.4 646.45 375.3 646.9 374.9 647.45 Q373.8 648.15 373.45 649.25 L373.45 649.35 373.75 650.9 Q374.2 650.05 375.05 649.35 L375.05 649.3 375.4 649 375.75 648.75 376.2 648.5 376.65 648.45 376.75 648.45 377.25 647.95 377.55 647.7 377.55 647.6 377.45 645.55 Q377.25 644.15 376.7 642.7 L376.3 641.55 Q376.1 640.7 376.2 640.25 376.45 639.4 377.05 638.95 377.65 638.5 378.45 638.7 379 638.85 379.4 639.25 L379.9 640.25 Q380.6 642.5 379.35 645.9 L379.7 645.6 Q382.15 643.05 383.65 640.25 L383.6 639.85 Q383.25 638.05 381.65 636.7 381.15 636.3 381 635.75 380.85 635.25 381 634.95 381.25 634.4 381.8 634.15 L382.9 634.25 Q383.15 634.4 383.4 634.65 L383.7 635.2 384 635.8 384.2 636.35 384.6 638.35 384.95 637.5 385.35 636.25 385.3 635.85 Q385.05 634.45 383.8 633.4 L383.35 632.7 383.35 632.15 Q383.5 631.75 383.9 631.6 L384.65 631.65 385 631.95 385.25 632.3 385.45 632.75 385.6 633.2 385.9 634.25 386.25 631.6 385.7 631.1 Q383.9 629.55 380.9 629.25 380.2 629.3 379.7 628.85 379.15 628.4 379.1 627.7 379 626.95 379.45 626.4 379.9 625.85 380.65 625.75 L381.7 625.9 382.6 626.25 384.9 627.8 386.25 629.6 385.8 626.05 Q385.25 623.35 384 620.9 L383 620.4 381.05 619.8 380.2 619.65 379.4 619.2 379.4 619.15 378.9 618.2 Q378.85 617.6 379.3 617.2 379.6 616.9 380 616.8 L380.8 616.85 381.5 617.1 380.85 616.4 380.05 615.95 Q378.75 615.35 377.2 615.05 L376.05 614.75 Q375.25 614.45 374.9 614.05 374.3 613.4 374.25 612.7 374.25 611.9 374.85 611.35 L375.85 610.85 376.95 610.95 Q379.25 611.65 381.4 614.65 L381.75 615.1 381.95 615.25 382.3 615.65 382.15 614.15 382.45 612.25 382.75 611.35 Q382.95 610.75 383.25 610.45 383.75 609.95 384.45 609.95 L384.5 609.95 Q385.2 609.9 385.7 610.4 386.25 610.9 386.25 611.6 386.3 612.3 385.85 612.85 384.2 615.4 384.3 617.75 L384.4 618.45 385.95 621.35 386.15 621.95 386.2 621.55 Q386.25 620.5 386.45 619.45 L387.05 617.55 387.5 616.75 388.25 616.1 389.8 615.95 Q390.6 616.2 391 617.05 L391.1 618.2 Q391 619.05 390.4 619.75 388.2 621.9 387.3 624.55 L387.2 624.9 387.4 625.95 387.65 625.1 388.3 623.8 388.75 623.25 389.35 622.85 390.55 622.9 Q391.1 623.15 391.35 623.85 L391.3 624.75 Q391.15 625.4 390.6 625.8 388.8 627.15 387.9 628.95 L387.85 628.95 387.85 629.05 387.9 630.5 387.95 630.6 388.15 630.95 388.2 631.35 388.2 631.7 388.15 632.1 387.9 633.3 Q389.05 632.45 390.4 631.9 L392 631.35 392.15 631.25 392.2 631.25 392.55 630.3 392.8 628.85 392.85 628.25 393.1 627.65 393.75 627.25 Q394.1 627.2 394.45 627.45 L394.75 627.9 394.75 628.45 Q394.6 629.6 393.35 630.85 L393.55 630.8 396.45 629.2 396.5 629.05 Q396.7 628.15 396.25 627.2 L396.2 626.65 Q396.2 626.4 396.35 626.35 L396.35 626.3 396.85 626.1 Q397.15 626.15 397.3 626.4 L397.3 626.35 397.45 626.65 397.5 627 397.5 627.3 397.45 627.6 397.25 628.55 397.8 628.05 399.35 625.9 399.25 625.6 Q398.75 624.5 397.45 623.75 L397 623.3 397 622.7 397.45 622.2 398.1 622.15 Q398.3 622.2 398.5 622.4 L398.85 622.75 399.55 623.95 399.8 625 400.35 623.35 400.6 620.7 400.25 620.25 399.5 619.55 399.15 619.35 398.9 618.95 398.9 618.4 Q398.95 618.15 399.25 618.05 L399.65 618 400 618.2 400.25 618.45 400.15 618 399.85 617.65 398.8 616.65 398.3 616.25 397.95 615.75 397.95 615 398.5 614.5 399.05 614.5 399.5 614.75 Q400.4 615.55 400.75 617.35 L400.8 617.6 400.85 617.75 400.85 617.7 400.9 618 401.15 617.3 401.7 616.5 402 616.15 402.4 615.85 403.05 615.9 403.1 615.9 403.55 616.35 403.55 617 403.05 617.45 Q401.8 618.25 401.4 619.35 L401.25 619.65 401.35 621.25 401.35 621.6 401.45 621.45 402 620.55 402 620.5 402.65 619.8 403 619.55 403.45 619.4 Q403.9 619.35 404.2 619.65 L404.5 620.4 404.3 620.95 403.7 621.45 Q402.25 622 401.3 622.95 L401.2 623.1 401.05 623.65 401.35 623.3 401.9 622.85 402.2 622.7 402.55 622.65 402.6 622.65 Q402.9 622.65 403.1 622.9 L403.25 623.5 403.05 623.9 Q402.85 624.15 402.5 624.2 401.45 624.45 400.65 625.05 L400.6 625.1 Q399.9 626.95 398.45 628.45 L397.75 629.15 398.15 629 399.2 628.7 400.15 628.6 400.6 628.65 401.05 628.85 Q401.4 629.15 401.4 629.55 L401.15 630.3 400.65 630.55 399.8 630.5 Q398.4 629.95 397.05 630.05 L396.5 630.1 395.6 630.65 396.1 630.7 396.8 630.85 397.1 631 397.35 631.25 397.5 631.85 397.1 632.3 396.7 632.4 396.1 632.15 Q395.3 631.5 394.4 631.25 L393.3 631.7 391.7 632.3 390.35 632.8 390.45 632.8 391.5 632.65 392.45 632.7 392.9 632.8 393.3 633.05 393.6 633.75 393.2 634.5 392.7 634.7 391.85 634.55 Q390.55 633.8 389.2 633.7 L388.7 633.7 388.6 633.75 387.4 634.7 387.2 635.6 387.25 635.6 Q387.55 635.55 387.75 635.8 L387.9 636.3 387.7 636.65 387.25 636.9 386.75 637.05 386.75 637.15 386.05 638.95 386.65 638.3 388.25 636.9 Q389.05 636.3 390 635.95 390.45 635.7 390.85 635.65 L391.85 635.65 391.9 635.65 392.1 635.3 392.55 634.95 393.35 635 Q393.7 635.15 393.85 635.6 L393.85 636.1 393.7 636.55 393.7 636.5 393.35 637.3 393.3 638.05 394.3 637.8 394.55 637.55 Q395.45 636.8 395.8 635.35 395.85 635 396.1 634.8 396.35 634.55 396.7 634.55 397.05 634.55 397.3 634.85 L397.5 635.45 397.4 635.95 397.15 636.35 396.6 637.1 396 637.55 396.25 637.55 396.4 637.55 396.65 637.55 396.7 637.55 399.5 637.85 399.9 638.2 400.05 638.75 399.8 639.4 399.1 639.65 398.5 639.45 397.95 639.15 396.7 638.45 396.2 638.3 395.8 638.35 396.1 638.5 396.35 638.75 396.5 639.15 396.25 639.65 395.75 639.8 395.3 639.65 394.95 639.4 Q394.55 639.1 394.1 638.95 L393.6 638.75 392.6 639.1 392.55 639.1 Q392.05 639.6 391.35 639.7 L391.1 639.85 389.75 640.9 390.85 640.8 392.15 641.05 392.6 641.25 393 641.6 393.15 642.25 392.85 642.8 392.25 643 391.7 642.7 391.65 642.7 Q390.55 641.75 389.35 641.6 L389 641.6 387.65 643.6 387.85 644.05 388.05 643.95 388.3 643.8 388.6 643.7 388.9 643.65 389.25 643.65 389.2 643.7 389.65 644.05 389.6 644.6 389.35 644.85 388.8 644.95 387.75 645 387.55 645.35 386.85 645.9 386.7 645.95 Q386.35 647.25 386.3 648.7 L386.3 648.95 Q387.05 647.3 388.1 646.8 L388.65 646.65 389.15 646.75 389.55 647.35 389.35 648.1 388.9 648.5 388.35 648.75 387.05 649.45 386.3 650.1 386.3 650.15 386.3 650.35 386.25 652 385.75 654.85 Q386.2 654.5 386.75 654.2 L387.15 654.05 387.5 653.95 387.9 653.85 388.3 653.9 388.75 654.4 388.7 655.05 388.4 655.35 387.7 655.45 Q386.4 655.3 385.4 655.9 L385.35 655.95 384.55 657.35 Q385.45 656.95 386.6 657 L386.6 656.95 387.05 657 387.5 657 387.95 657.15 387.95 657.1 388.4 657.4 388.45 657.45 389.15 657.4 389.55 657.4 389.6 657.35 390.85 655.75 392.15 653.05 392.65 651.9 393.45 650.9 Q394.2 650.4 394.9 650.5 395.65 650.55 396.15 651.25 L396.45 652.3 396.25 653.35 Q395.25 655.5 392.1 657.25 L392.55 657.2 Q396.05 656.9 399.05 655.8 L399.25 655.45 Q400.2 653.9 399.85 651.8 399.75 651.15 400 650.7 400.2 650.2 400.5 650.1 L401.6 649.95 402.4 650.75 402.5 651.4 402.4 652.05 402.2 652.65 402 653.25 401 655 401.8 654.6 402.95 653.9 403.2 653.55 Q403.9 652.35 403.65 650.7 403.55 650.25 403.75 649.9 L404.1 649.5 404.9 649.4 405.45 649.95 405.5 650.45 405.45 650.9 405.3 651.35 405.15 651.8 404.65 652.75 406.65 651 406.6 650.25 Q406.25 647.9 404.15 645.7 403.65 645.25 403.55 644.6 403.45 643.9 403.85 643.3 L403.85 643.35 Q404.25 642.75 404.95 642.6 405.7 642.5 406.3 642.9 L407 643.7 407.45 644.6 Q408 645.8 408.15 647.2 L408 649.5 410 646.5 Q411.35 644.1 412 641.45 L411.6 640.4 410.5 638.7 410 638 Q409.65 637.5 409.65 637.1 409.65 636.45 409.95 636.05 410.25 635.55 410.9 635.55 L411.65 635.75 412.25 636.3 412.6 636.9 412.6 636 412.25 635.1 Q411.7 633.8 410.75 632.55 L410.05 631.55 409.65 630.3 Q409.6 629.4 410.05 628.85 410.55 628.25 411.4 628.25 L412.45 628.5 413.2 629.3 Q414.5 631.35 414.15 635 L414.15 635.05 414.1 635.6 414.15 635.85 414.15 636.4 Q414.55 635.7 415.05 635.15 L416.5 633.9 417.35 633.4 Q417.85 633.1 418.3 633.1 419 633 419.55 633.45 L419.55 633.5 Q420.1 633.95 420.2 634.65 420.25 635.35 419.8 635.95 M386 641.35 L386.2 641.75 386.45 642.7 386.45 642.95 387 643.1 Q387.95 641.35 389.4 640.15 L389.4 640.1 389.45 639.95 Q387.5 640.25 385.8 641.1 L386 641.35 M381.65 645.75 L380.05 647.45 377.55 649.95 375.5 652.1 375.7 651.95 377.5 650.8 377.5 650.75 379.3 650.05 380.25 649.9 381.2 650 Q382.05 650.3 382.35 651.1 382.6 651.85 382.25 652.7 L381.55 653.45 381.7 653.7 381.85 654.5 381.75 655.3 381.5 656.05 381.25 656.8 380.05 658.95 382.2 658.3 Q382.65 657.6 382.55 656.65 L382.65 656.1 382.9 655.85 383.45 655.8 383.8 656.2 383.8 656.55 383.8 656.8 383.65 657.1 383.55 657.4 383.65 657.25 384.55 655.85 385.1 654.3 385.1 654.35 385.1 654.2 384.95 653.75 Q384.4 652.5 383.3 651.5 382.95 651.2 382.9 650.75 L382.9 650.2 Q383.1 649.75 383.45 649.6 L384.25 649.65 384.6 649.95 384.85 650.35 385.2 651.25 385.4 652.25 385.4 652.4 385.5 650.95 385.5 649.2 385.55 648.05 Q385.05 647.3 384.15 646.75 L383.75 646.25 383.7 645.8 383.75 645.7 381.65 645.75 M398.65 662.2 L397.75 662.15 Q397.1 661.95 396.7 661.4 395.55 659.65 393.9 658.65 L391.6 658.9 391.55 658.9 388.05 659.1 388.1 659.1 385.1 659.4 385.35 659.4 387.45 659.7 387.5 659.7 389.3 660.35 390.15 660.8 390.75 661.55 Q391.2 662.35 390.9 663.1 390.65 663.85 389.8 664.25 L388.65 664.4 Q387.75 664.25 387.1 663.65 385.8 662.25 384.25 661.4 L384.35 662 384.1 662.9 383.6 663.7 382.95 664.45 382.25 665.1 Q380.6 666.7 378.75 667.45 380.35 667.75 381.9 668.35 L382.05 668.35 Q384.4 667.85 386.05 665.75 386.55 665.15 387.2 664.95 387.8 664.75 388.15 664.95 388.85 665.25 389.15 665.85 389.45 666.5 389.1 667.2 L388.55 667.8 387.95 668.25 387.9 668.25 387.2 668.55 386.45 668.85 384.05 669.4 385.95 670.6 387.4 669.75 Q387.6 669.55 387.9 669.45 L388.25 669.5 388.65 669.9 388.55 670.4 388.35 670.65 388.1 670.8 387.8 670.9 387.5 671 387.65 671 389.3 670.75 390.85 670.15 390.8 670.15 390.95 670.1 391.15 669.65 Q391.75 668.45 391.8 666.9 391.8 666.5 392.1 666.15 L392.5 665.8 Q392.95 665.65 393.3 665.8 L393.8 666.45 393.8 666.9 393.7 667.35 393.25 668.2 392.6 669 392.5 669.1 393.65 668.2 395 667.1 395.9 666.4 Q396.1 665.5 395.95 664.45 L396.05 663.85 396.35 663.5 396.95 663.4 397.4 663.8 397.45 664.15 397.45 664.5 397.25 665.2 397 665.6 397.95 665.15 398.25 664.7 Q399 663.55 399.25 662.05 L399.25 661.9 398.65 662.2 M383.4 643.6 L384.3 643.25 384.85 643.1 384.5 642.7 384.3 642.3 383.4 643.6 M361.8 657.25 L361.55 658.2 361.65 658.45 Q362.3 660.1 363.1 661.45 364.05 662.95 365.15 664.05 L365.45 664.3 365.1 663.75 365.15 663.75 364.85 663.2 364.65 662.6 364.65 661.95 Q364.75 661.35 365.3 661.1 L366.4 661 367 661.5 367.3 662.55 Q367.3 664.65 368.45 666.05 L368.6 666.25 369.95 666.7 Q369.3 664.75 369.3 662.75 L368.8 661.95 Q367.15 659.6 363.9 658.8 363.05 658.55 362.5 657.95 L362 656.9 362.05 656.55 361.8 657.25 M356.3 668.65 L356.9 669.45 357.15 669.5 360.4 670.15 Q362.15 670.35 363.7 670.1 L364.1 670.05 363.45 669.95 363.5 669.95 362.85 669.85 362.25 669.65 361.75 669.25 Q361.35 668.8 361.45 668.2 361.55 667.65 362.05 667.3 L362.8 667.1 Q363.35 667.15 363.85 667.5 365.5 668.8 367.3 668.7 L367.55 668.7 368.7 667.9 Q366.75 667.2 365.15 666 L364.25 665.9 Q361.35 665.8 358.75 667.8 358 668.35 357.2 668.4 L356.1 668.2 355.75 667.9 356.3 668.65 M375.2 654.7 L375.45 655.55 375.6 656.5 375.65 657.5 Q375.75 659.8 375.15 661.65 L377.85 659.9 377.95 659.75 Q379.1 657.7 378.65 655.05 378.5 654.45 378.7 653.95 L375.1 654.45 375.2 654.7 M371.65 658.35 Q371 660 370.85 661.55 L370.8 661.95 371.05 661.35 371.3 660.8 371.65 660.25 372.15 659.85 Q372.75 659.6 373.25 659.85 L373.4 659.95 Q373.1 658.5 372.2 657.1 L371.65 658.35 M373.3 662.3 L373.3 662.35 Q371.65 663.6 371.25 665.4 L371.2 665.6 371.45 666.4 Q372.25 664.7 373.45 663.3 L373.6 662.45 373.6 662.05 373.3 662.3 M381.45 660.2 L381.2 660.25 Q379.45 660.8 378.1 661.55 376.5 662.4 375.35 663.45 L375.1 663.7 375.65 663.4 376.25 663.15 376.8 663 377.5 663.05 Q378.1 663.2 378.3 663.75 378.55 664.25 378.35 664.8 L377.8 665.4 376.75 665.65 Q374.65 665.55 373.2 666.6 L373 666.75 372.5 667.9 Q374.45 667.3 376.4 667.25 L377.15 666.8 Q379.5 665.1 380.35 661.9 380.6 661.05 381.2 660.5 L381.55 660.25 381.45 660.2 M380.8 669.6 L377.55 668.8 377.2 668.8 377.8 669 378.35 669.3 378.85 669.6 379.25 670.15 Q379.55 670.7 379.3 671.25 L378.5 671.95 377.7 671.95 376.8 671.3 Q375.55 669.65 373.75 669.25 L373.55 669.2 372.5 669.5 Q374.25 670.45 375.6 671.8 L376.45 671.95 Q379.35 672.45 382.15 670.75 L382.75 670.5 380.8 669.6 M385.15 677.8 Q385.3 675.6 384.9 673.7 L384.1 674.15 383.2 674.35 382.2 674.4 381.25 674.4 381.25 674.35 Q378.95 674.35 377.1 673.6 L378.7 676.45 378.85 676.55 Q380.8 677.8 383.5 677.5 L384.85 677.75 385.15 677.95 385.15 677.8 M393.25 684.85 Q393 684.2 393.15 683.55 393.65 681.5 393.4 679.65 L391.65 678.05 389.2 675.55 387.05 673.5 387.15 673.7 388.35 675.45 389.1 677.3 389.25 678.2 389.15 679.15 Q388.85 680.05 388.05 680.3 L386.45 680.2 385.65 679.55 385.6 679.75 Q385.35 680.45 384.6 680.7 L383.8 680.75 383.05 680.6 382.3 680.3 381.55 680 Q380.4 679.45 379.45 678.7 L380 680.9 Q380.65 681.35 381.6 681.35 L382.15 681.45 382.4 681.75 382.4 682.25 381.95 682.6 381.65 682.6 381.35 682.55 381.1 682.4 381.05 682.4 380.8 682.25 380.95 682.4 382.25 683.35 383.75 684 383.9 684.05 384.35 683.9 Q385.65 683.45 386.7 682.4 387.05 682.1 387.45 682.05 L388 682.1 388.55 682.7 388.5 683.5 388.15 683.85 387.75 684.05 386.85 684.35 385.8 684.45 385.65 684.45 387.1 684.65 388.85 684.8 390 684.9 391.4 683.6 391.9 683.25 392.35 683.2 Q392.7 683.3 392.85 683.55 L392.85 684.15 392.65 684.45 392.4 684.7 391.8 685.05 391.35 685.2 392.3 685.5 392.85 685.4 393.45 685.25 393.25 684.85 M399.4 689 Q399.2 685.9 397.85 683.45 L397.3 682.55 395.5 681.35 395.9 682.25 395.9 682.3 396.15 683.7 396.2 684 396.75 684.15 397.2 684.75 Q397.3 685.2 397 685.5 L396.65 685.8 396.25 686 395.3 686.15 394.2 686.15 393.8 686.1 394.65 686.55 Q396.4 687.65 397.6 689.3 L397.65 689.3 399.5 689.65 399.4 689"
        />
        <path
          stroke="none"
          fill="url(#gradient192)"
          d="M454.1 649.3 L454.1 649.25 Q453.25 648.65 453.1 647.65 452.9 646.6 453.5 645.75 454.1 644.9 455.15 644.7 456.2 644.55 457.05 645.15 458.95 646.5 459.85 648.05 460.75 649.6 460.15 650.45 459.55 651.3 457.8 650.95 456 650.6 454.1 649.3"
        />
        <path
          stroke="none"
          fill="url(#gradient193)"
          d="M459.95 671.15 L459.9 671.15 Q458.75 671.1 457.95 670.25 457.15 669.4 457.15 668.2 457.2 667.05 458.05 666.25 458.9 665.45 460.1 665.45 462.75 665.55 464.55 666.45 466.4 667.3 466.35 668.5 466.3 669.7 464.45 670.45 462.55 671.25 459.95 671.15"
        />
        <path
          stroke="none"
          fill="url(#gradient194)"
          d="M466.3 679.2 L466.35 679.2 Q467.4 679.2 468.1 679.95 468.85 680.7 468.85 681.75 468.85 682.8 468.1 683.5 467.35 684.25 466.3 684.25 L466.25 684.25 Q463.95 684.25 462.3 683.5 460.65 682.75 460.65 681.7 460.7 680.6 462.3 679.9 464 679.15 466.3 679.2"
        />
        <path
          stroke="none"
          fill="url(#gradient195)"
          d="M451.3 677.05 Q451.95 677.9 451.8 678.95 451.7 680 450.85 680.65 450 681.3 448.95 681.15 447.9 681.05 447.25 680.2 L447.2 680.15 Q445.8 678.3 445.35 676.5 444.95 674.75 445.8 674.1 446.65 673.45 448.25 674.3 449.85 675.15 451.3 677.05"
        />
        <path
          stroke="none"
          fill="url(#gradient196)"
          d="M451.2 694.85 Q452 693.55 453.45 693.2 454.9 692.8 456.2 693.6 457.45 694.35 457.85 695.8 458.2 697.25 457.45 698.5 L457.45 698.55 Q455.75 701.4 453.65 702.9 451.55 704.4 450.25 703.6 448.95 702.85 449.25 700.3 449.5 697.75 451.2 694.85"
        />
        <path
          stroke="none"
          fill="url(#gradient197)"
          d="M464.35 710.85 L464.3 710.85 Q463.35 710.4 463 709.4 462.6 708.4 463.05 707.4 463.5 706.45 464.55 706.05 L466.5 706.15 Q468.7 707.15 469.9 708.55 471.1 709.95 470.65 710.9 470.2 711.9 468.35 711.85 466.5 711.85 464.35 710.85"
        />
        <path
          stroke="none"
          fill="url(#gradient198)"
          d="M546.35 674.1 Q545.25 674.3 544.35 673.65 543.4 673 543.2 671.9 543 670.8 543.65 669.9 544.25 668.95 545.35 668.75 L545.4 668.75 Q547.85 668.3 549.7 668.75 551.6 669.2 551.8 670.3 552 671.4 550.4 672.55 548.8 673.65 546.35 674.1"
        />
        <path
          stroke="none"
          fill="url(#gradient199)"
          d="M520.25 625.05 L520.3 625.1 Q520.9 626.35 520.4 627.7 519.95 629.05 518.65 629.7 L516 629.85 Q514.65 629.4 514.05 628.1 L514.05 628.05 Q512.65 625.2 512.6 622.75 512.5 620.3 513.8 619.65 515.1 619 517 620.6 518.9 622.2 520.25 625.05"
        />
        <path
          stroke="none"
          fill="url(#gradient200)"
          d="M492.3 621.25 L492.35 621.2 Q493.3 620.3 494.65 620.3 496.05 620.35 497 621.35 497.9 622.35 497.85 623.7 497.85 625.05 496.85 626 494.65 628.1 492.4 628.85 490.2 629.65 489.25 628.65 488.3 627.65 489.2 625.5 490.1 623.3 492.3 621.25"
        />
        <path
          stroke="none"
          fill="url(#gradient201)"
          d="M506 640.8 L505.95 640.75 Q505.4 639.6 505.8 638.35 506.2 637.1 507.4 636.5 L509.8 636.3 Q511.05 636.7 511.65 637.85 L511.65 637.9 Q513 640.5 513.1 642.8 513.2 645.05 512.05 645.65 510.85 646.25 509.1 644.85 507.3 643.4 506 640.8"
        />
        <path
          stroke="none"
          fill="url(#gradient202)"
          d="M496.6 651.8 L496.55 651.8 Q495.25 651.2 494.75 649.9 494.2 648.55 494.8 647.2 495.35 645.9 496.7 645.4 498.05 644.85 499.35 645.4 L499.4 645.45 Q502.3 646.7 503.95 648.55 505.65 650.4 505.05 651.7 504.5 653.05 502 653.05 499.5 653.1 496.6 651.8"
        />
        <path
          stroke="none"
          fill="url(#gradient203)"
          d="M472.7 632.8 Q473.25 633.75 472.95 634.85 472.7 635.9 471.75 636.5 L469.7 636.75 Q468.65 636.5 468.05 635.55 466.8 633.4 466.6 631.5 466.35 629.65 467.3 629.05 468.25 628.5 469.85 629.6 471.4 630.65 472.7 632.8"
        />
        <path
          stroke="none"
          fill="url(#gradient204)"
          d="M472 647.05 L471.95 647.05 Q470.6 646.9 469.75 645.9 468.85 644.85 469 643.45 469.1 642.1 470.15 641.25 471.2 640.35 472.55 640.5 L472.6 640.5 Q475.6 640.75 477.65 641.95 479.7 643.1 479.6 644.45 479.45 645.8 477.25 646.6 L472 647.05"
        />
        <path
          stroke="none"
          fill="url(#gradient205)"
          d="M489.3 651.2 L489.25 651.2 Q489.05 652.3 488.15 652.9 487.2 653.5 486.15 653.25 485.05 653 484.45 652.1 483.9 651.2 484.1 650.1 484.6 647.7 485.75 646.2 486.85 644.7 487.9 644.9 489 645.15 489.4 647 489.8 648.8 489.3 651.2"
        />
        <path
          stroke="none"
          fill="url(#gradient206)"
          d="M473.4 658.6 L473.35 658.6 Q472.3 657.55 472.25 656.05 472.2 654.55 473.2 653.45 474.25 652.35 475.75 652.3 477.25 652.25 478.35 653.25 L478.4 653.3 Q480.8 655.6 481.85 658 482.85 660.35 481.8 661.5 480.75 662.6 478.3 661.75 475.85 660.9 473.4 658.6"
        />
        <path
          stroke="none"
          fill="url(#gradient207)"
          d="M472.1 671.35 Q472.45 670.35 473.4 669.9 L475.35 669.75 Q476.35 670.1 476.85 671.05 477.3 672 476.95 673 L476.95 673.05 Q476.2 675.25 474.9 676.55 473.7 677.9 472.7 677.55 471.7 677.2 471.5 675.4 471.35 673.55 472.1 671.35"
        />
        <path
          stroke="none"
          fill="url(#gradient208)"
          d="M488.6 665.45 L488.55 665.45 Q487 665.65 485.8 664.7 484.55 663.8 484.3 662.2 484.1 660.65 485.05 659.45 485.95 658.2 487.5 657.95 L487.55 657.95 493.55 658.25 Q496.15 659 496.35 660.5 496.55 662.1 494.3 663.5 492 664.95 488.6 665.45"
        />
        <path
          stroke="none"
          fill="url(#gradient209)"
          d="M501.65 670.6 Q500.2 670.95 498.95 670.2 497.65 669.45 497.3 668 496.9 666.55 497.65 665.3 498.4 664.05 499.85 663.65 L505.6 663.25 Q508.1 663.7 508.5 665.1 508.85 666.55 506.85 668.15 504.85 669.75 501.65 670.6"
        />
        <path
          stroke="none"
          fill="url(#gradient210)"
          d="M538.7 643.4 Q539.5 644.6 539.25 646 539.05 647.4 537.85 648.25 536.65 649.05 535.25 648.8 533.85 648.55 533 647.4 L533 647.35 Q531.15 644.75 530.7 642.3 530.25 639.9 531.45 639.05 532.65 638.25 534.75 639.5 536.85 640.8 538.7 643.4"
        />
        <path
          stroke="none"
          fill="url(#gradient211)"
          d="M514.9 652.4 L514.9 652.35 Q515.65 651.05 517.1 650.6 518.55 650.2 519.9 650.9 521.2 651.65 521.65 653.1 522.05 654.55 521.35 655.9 519.7 658.85 517.6 660.45 515.5 662 514.2 661.3 512.85 660.55 513.05 657.95 513.25 655.35 514.9 652.4"
        />
        <path
          stroke="none"
          fill="url(#gradient212)"
          d="M530.85 664.8 Q529.85 665.7 528.5 665.65 527.15 665.6 526.2 664.6 525.3 663.6 525.4 662.25 525.45 660.9 526.4 659.95 L526.45 659.95 Q528.65 657.9 530.9 657.2 533.1 656.5 534 657.45 534.95 658.5 534 660.6 533.1 662.75 530.85 664.8"
        />
        <path
          stroke="none"
          fill="url(#gradient213)"
          d="M517.6 668.1 L517.55 668.1 Q517.4 666.95 518.1 666.05 518.8 665.1 519.95 664.95 521.1 664.75 522 665.45 522.95 666.15 523.1 667.3 523.5 669.85 522.95 671.75 522.4 673.7 521.25 673.85 520.1 674 519 672.35 517.95 670.65 517.6 668.1"
        />
        <path
          stroke="none"
          fill="url(#gradient214)"
          d="M526.8 685.45 L526.8 685.4 Q526.7 684.15 527.5 683.15 528.3 682.15 529.6 682.05 530.9 681.9 531.85 682.75 532.85 683.55 533 684.8 L533 684.85 Q533.25 687.7 532.55 689.8 531.85 691.85 530.55 692 529.25 692.1 528.2 690.2 527.1 688.3 526.8 685.45"
        />
        <path
          stroke="none"
          fill="url(#gradient215)"
          d="M539.2 695.9 L539.2 695.85 Q539.45 694.85 540.35 694.35 541.25 693.8 542.25 694.05 543.3 694.25 543.8 695.15 544.35 696.05 544.1 697.05 L544.1 697.1 Q543.55 699.35 542.45 700.75 541.35 702.15 540.35 701.9 539.3 701.65 539 699.9 538.65 698.15 539.2 695.9"
        />
        <path
          stroke="none"
          fill="url(#gradient216)"
          d="M505.6 690.25 Q504.75 690.95 503.65 690.9 502.55 690.85 501.8 690 501.1 689.2 501.15 688.1 501.2 687 502.05 686.25 503.9 684.6 505.7 684.05 507.55 683.5 508.25 684.3 509 685.15 508.2 686.85 507.45 688.6 505.6 690.25"
        />
        <path
          stroke="none"
          fill="url(#gradient217)"
          d="M515.05 690.25 L515.05 690.2 Q515.4 689.15 516.4 688.65 L518.5 688.5 Q519.6 688.85 520.1 689.85 520.6 690.85 520.25 691.95 519.45 694.35 518.15 695.8 516.8 697.25 515.75 696.9 514.65 696.55 514.45 694.6 514.25 692.65 515.05 690.25"
        />
        <path
          stroke="none"
          fill="url(#gradient218)"
          d="M518.15 703.6 L518.15 703.55 Q518.75 702.4 519.95 702 L522.35 702.2 Q523.5 702.75 523.9 704 524.3 705.2 523.75 706.35 L523.75 706.4 Q522.45 708.95 520.7 710.35 518.95 711.75 517.8 711.2 516.65 710.6 516.75 708.35 516.85 706.15 518.15 703.6"
        />
        <path
          stroke="none"
          fill="url(#gradient219)"
          d="M510.95 698.7 L510.95 698.75 Q512.05 699.35 512.4 700.6 512.75 701.8 512.1 702.95 511.45 704.05 510.2 704.4 509 704.7 507.9 704.1 L507.85 704.05 Q505.4 702.65 504.1 700.9 502.85 699.1 503.45 698 504.1 696.9 506.3 697.1 508.5 697.3 510.95 698.7"
        />
        <path
          stroke="none"
          fill="url(#gradient220)"
          d="M496.2 672 L496.25 672 Q497.6 672.4 498.25 673.65 498.9 674.85 498.5 676.2 498.15 677.55 496.9 678.25 495.7 678.9 494.35 678.55 L494.3 678.5 Q491.35 677.65 489.5 676.05 487.65 674.5 488.05 673.15 488.45 671.8 490.85 671.5 493.2 671.15 496.2 672"
        />
        <path
          stroke="none"
          fill="url(#gradient221)"
          d="M486.45 697.8 Q485.3 697.7 484.6 696.85 483.85 696.05 483.95 694.9 484 693.8 484.9 693.05 485.7 692.35 486.85 692.4 489.35 692.6 491.05 693.5 492.75 694.45 492.65 695.55 492.55 696.7 490.75 697.35 L486.45 697.8"
        />
        <path
          stroke="none"
          fill="url(#gradient222)"
          d="M472.9 690 L472.85 690 Q472.3 689.05 472.55 687.95 472.8 686.9 473.7 686.3 474.65 685.7 475.75 685.95 476.8 686.2 477.4 687.1 L477.4 687.15 Q478.75 689.2 479 691.1 479.25 693 478.35 693.6 477.4 694.2 475.8 693.15 474.2 692.1 472.9 690"
        />
        <path
          stroke="none"
          fill="url(#gradient223)"
          d="M476.95 706.1 L476.9 706.1 Q475.75 706.05 474.95 705.2 474.1 704.35 474.15 703.15 474.2 701.95 475.1 701.15 475.95 700.35 477.1 700.4 L477.15 700.4 Q479.75 700.45 481.6 701.4 483.4 702.25 483.35 703.45 483.3 704.65 481.45 705.4 479.55 706.2 476.95 706.1"
        />
        <path
          stroke="none"
          fill="url(#gradient224)"
          d="M494.4 714.1 L494.35 714.05 Q493.55 712.75 493.85 711.3 494.2 709.8 495.5 708.95 496.75 708.1 498.25 708.45 499.75 708.75 500.6 710.05 L500.6 710.1 Q502.45 712.95 502.85 715.55 503.25 718.15 501.95 719 500.65 719.85 498.45 718.4 496.2 716.95 494.4 714.1"
        />
        <path
          stroke="none"
          fill="url(#gradient225)"
          d="M637.75 627.85 L637.05 626.2 Q636.75 629.1 633.45 630.65 L633.85 627.3 Q632.9 630.05 629.7 630.6 L630.2 627.95 Q627.1 630.05 624.65 629.3 624.9 626.8 628.1 624.75 L625.5 624.2 Q627.25 621.45 630.15 621.7 L626.9 620.7 Q629.65 618.3 632.4 619.2 L631.2 617.85 Q635.75 615.9 637.3 621 641.35 624.4 637.75 627.85"
        />
        <path
          stroke="none"
          fill="url(#gradient226)"
          d="M660.05 631.1 L658.6 631.2 Q660.7 632.25 660.95 635.25 L658.5 633.95 Q660.3 635.45 659.8 638.05 L657.95 636.9 Q658.65 639.9 657.35 641.5 655.5 640.55 654.9 637.55 L653.7 639.4 Q652.15 637.25 653.15 635.1 L651.45 637.3 Q650.45 634.45 651.9 632.65 L650.55 633.2 Q650.4 629.15 654.75 629.45 658.5 627.4 660.05 631.1"
        />
        <path
          stroke="none"
          fill="url(#gradient227)"
          d="M630.1 651.2 L631.45 650.6 Q629 650.4 627.6 647.65 L630.45 647.9 Q628.1 647.15 627.6 644.45 L629.8 644.85 Q628 642.25 628.55 640.2 630.7 640.4 632.5 643 L632.9 640.8 Q635.25 642.25 635.1 644.65 L635.85 641.9 Q637.95 644.2 637.25 646.55 L638.35 645.5 Q640.1 649.3 635.85 650.7 633.05 654.2 630.1 651.2"
        />
        <path
          stroke="none"
          fill="url(#gradient228)"
          d="M648.95 662.15 L647.45 662 Q649.45 663.4 649.2 666.5 L646.9 664.8 Q648.5 666.65 647.55 669.25 L645.85 667.75 Q646.1 670.9 644.5 672.4 642.75 671.15 642.6 667.95 L641.1 669.6 Q639.85 667.2 641.25 665.15 L639.15 667.1 Q638.55 664.05 640.35 662.4 L638.85 662.75 Q639.35 658.55 643.7 659.6 647.95 658.05 648.95 662.15"
        />
        <path
          stroke="none"
          fill="url(#gradient229)"
          d="M671.05 657.65 L670.5 656.35 Q670.25 658.65 667.6 659.85 L667.95 657.2 Q667.15 659.35 664.65 659.75 L665.05 657.65 Q662.6 659.3 660.65 658.65 660.9 656.65 663.45 655.1 L661.4 654.6 Q662.8 652.45 665.1 652.7 L662.55 651.85 Q664.8 650 666.95 650.75 L666 649.65 Q669.65 648.2 670.8 652.25 673.95 655 671.05 657.65"
        />
        <path
          stroke="none"
          fill="url(#gradient230)"
          d="M676.35 674.55 L674.6 673.95 Q676.6 676.2 675.45 679.8 L673.2 677.15 Q674.6 679.8 672.75 682.6 L671.15 680.35 Q670.55 684.2 668.25 685.5 666.55 683.55 667.25 679.7 L665 681.3 Q664.15 678.05 666.35 676 L663.35 677.8 Q663.45 674 666.05 672.55 L664.2 672.5 Q665.95 667.7 670.85 670.1 676.3 669.45 676.35 674.55"
        />
        <path
          stroke="none"
          fill="url(#gradient231)"
          d="M665.05 692.7 L664 694.1 Q666.65 693 669.55 695.2 L666.4 696.4 Q669.25 695.95 671.25 698.55 L668.7 699.3 Q672 701.05 672.45 703.55 670.1 704.45 666.85 702.65 L667.55 705.2 Q664.35 704.9 663.2 702.25 L663.85 705.55 Q660.45 704.25 659.95 701.45 L659.35 703.1 Q655.5 700 659.25 696.3 660.4 691.15 665.05 692.7"
        />
        <path
          stroke="none"
          fill="url(#gradient232)"
          d="M649.8 689.2 L649.15 687.45 Q648.65 690.4 645.1 691.8 L645.75 688.35 Q644.55 691.1 641.25 691.45 L641.95 688.75 Q638.55 690.7 636.1 689.7 636.6 687.15 640.05 685.25 L637.35 684.5 Q639.4 681.8 642.4 682.25 L639.1 681 Q642.15 678.7 644.9 679.8 L643.8 678.35 Q648.65 676.7 649.85 682.1 653.75 685.95 649.8 689.2"
        />
        <path
          stroke="none"
          fill="url(#gradient233)"
          d="M620.6 665.6 L620.6 667.35 Q621.95 664.9 625.5 664.75 L623.85 667.6 Q625.75 665.55 628.8 666.3 L627.3 668.4 Q630.9 667.75 632.75 669.35 631.55 671.45 627.95 672.05 L630.05 673.55 Q627.45 675.3 624.95 673.95 L627.45 676.1 Q624.05 677.15 622 675.3 L622.55 676.95 Q617.75 676.9 618.4 671.8 616.1 667.25 620.6 665.6"
        />
        <path
          stroke="none"
          fill="url(#gradient234)"
          d="M629.65 714.75 L631.15 714.1 Q628.5 713.85 627 710.75 L630.15 711.1 Q627.6 710.2 627.1 707.25 L629.55 707.75 Q627.55 704.8 628.3 702.55 630.6 702.8 632.5 705.75 L633.05 703.3 Q635.6 704.95 635.4 707.65 L636.3 704.65 Q638.55 707.2 637.7 709.75 L638.95 708.65 Q640.75 712.9 636.05 714.35 632.85 718.1 629.65 714.75"
        />
        <path
          stroke="none"
          fill="url(#gradient235)"
          d="M652.8 719.95 L652.5 718.6 Q651.8 720.75 649.05 721.45 L649.85 718.9 Q648.7 720.9 646.15 720.8 L646.95 718.85 642.5 719 Q643.1 717.15 645.85 716.05 L643.95 715.25 Q645.7 713.4 647.9 714.05 L645.55 712.8 Q648.05 711.35 650.05 712.45 L649.3 711.3 Q653.15 710.5 653.5 714.65 656.1 717.9 652.8 719.95"
        />
        <path
          stroke="none"
          fill="url(#gradient236)"
          d="M575.65 655.25 L576.3 657 Q576.8 654 580.35 652.6 L579.7 656.05 Q580.9 653.25 584.25 652.9 L583.55 655.6 Q586.95 653.6 589.4 654.55 589 657.15 585.55 659.1 L588.25 659.85 Q586.25 662.55 583.2 662.15 L586.55 663.4 Q583.5 665.75 580.7 664.65 L581.85 666.1 Q576.95 667.8 575.7 662.4 571.7 658.6 575.65 655.25"
        />
        <path
          stroke="none"
          fill="url(#gradient237)"
          d="M617.45 624.1 L616.05 624.85 Q618.65 624.9 620.3 627.75 L617.25 627.65 Q619.75 628.3 620.45 631.15 L618.05 630.85 Q620.15 633.5 619.6 635.7 617.35 635.65 615.3 632.95 L615 635.3 Q612.45 633.9 612.45 631.3 L611.75 634.25 Q609.45 631.95 610.05 629.4 L608.95 630.55 Q606.95 626.6 611.35 624.95 614.2 621.1 617.45 624.1"
        />
        <path
          stroke="none"
          fill="url(#gradient238)"
          d="M594.55 643.35 L596.3 643.25 Q593.7 642 593.4 638.4 L596.4 639.9 Q594.15 638.05 594.75 634.9 L597 636.3 Q596.15 632.65 597.7 630.65 599.9 631.8 600.75 635.45 L602.15 633.2 Q604.1 635.75 602.85 638.4 L604.9 635.7 Q606.2 639.1 604.45 641.35 L606.05 640.7 Q606.3 645.6 601.05 645.3 596.5 647.9 594.55 643.35"
        />
        <path
          stroke="none"
          fill="url(#gradient239)"
          d="M597.45 665.6 L598.95 666.5 Q597.55 663.95 599.45 660.8 L601 663.8 Q600.25 661 602.65 658.75 L603.65 661.2 Q605.1 657.7 607.55 657 608.75 659.25 607.25 662.7 L609.75 661.7 Q609.8 665 607.25 666.45 L610.5 665.45 Q609.55 669 606.75 669.8 L608.5 670.25 Q605.8 674.4 601.65 671 596.35 670.45 597.45 665.6"
        />
        <path
          stroke="none"
          fill="url(#gradient240)"
          d="M606.7 680.05 L605.6 681.05 Q607.9 680.55 610 682.7 L607.25 683.25 Q609.65 683.3 610.85 685.7 L608.7 685.95 Q611.1 687.85 611.1 689.9 609.1 690.35 606.7 688.4 L606.95 690.55 Q604.35 689.9 603.8 687.55 L603.85 690.35 Q601.3 688.8 601.3 686.45 L600.55 687.7 Q597.9 684.6 601.45 682.15 603.1 678.1 606.7 680.05"
        />
        <path
          stroke="none"
          fill="url(#gradient241)"
          d="M612.55 700 L614.25 700.45 Q612.25 698.45 613.15 694.95 L615.45 697.35 Q613.95 694.9 615.55 692.15 L617.2 694.2 Q617.6 690.5 619.7 689.15 621.45 690.95 621 694.6 L623.05 693 Q624 696.05 622 698.1 L624.8 696.25 Q624.85 699.85 622.45 701.4 L624.2 701.3 Q622.8 706 618 703.95 612.85 704.85 612.55 700"
        />
        <path
          stroke="none"
          fill="url(#gradient242)"
          d="M603.35 716.5 L603.2 714.85 Q602.05 717.3 598.6 717.55 L600.05 714.75 Q598.3 716.85 595.3 716.25 L596.65 714.1 Q593.2 714.9 591.35 713.45 592.4 711.3 595.85 710.6 L593.75 709.2 Q596.2 707.4 598.7 708.6 L596.15 706.65 Q599.4 705.45 601.5 707.15 L600.9 705.6 Q605.55 705.4 605.2 710.35 607.65 714.7 603.35 716.5"
        />
        <path
          stroke="none"
          fill="url(#gradient243)"
          d="M588.4 686.9 L586.75 686.95 Q589.15 688.2 589.4 691.6 L586.6 690.1 Q588.7 691.85 588.05 694.8 L586 693.5 Q586.75 696.9 585.25 698.75 583.2 697.65 582.5 694.25 L581.1 696.3 Q579.35 693.85 580.5 691.4 L578.6 693.9 Q577.4 690.7 579.1 688.6 L577.6 689.2 Q577.45 684.6 582.35 685 586.65 682.6 588.4 686.9"
        />
      </g>
    </Svg>
  );
};

export default Icon;
