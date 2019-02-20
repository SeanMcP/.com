import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  height: 2rem;
  width: initial;
`

const Path = styled.path`
  fill: ${p => p.theme.primary_dark};
  fill-opacity: 1;
  stroke: none;
  stroke-opacity: 1;

  &:hover {
    fill: ${p => p.theme.accent_dark};
  }
`

const HeaderLogo = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="HeaderLogo"
      viewBox="0 0 646 140"
      height="140"
      width="646"
    >
      <defs id="HeaderLogo__defs" />
      <g transform="translate(0,-912.36216)" id="layer1">
        <Path
          id="HeaderLogo__path"
          d="m 0,912.36216 0,140.00004 525.58984,0 18.30274,-109.81645 21.85937,0 -2.18554,13.42774 0.9375,0 c 1.3185,-2.18593 3.08796,-4.38875 5.30859,-6.60938 2.25532,-2.22062 5.01384,-4.07637 8.27539,-5.56836 3.29625,-1.52667 7.16422,-2.29101 11.60547,-2.29101 5.86384,0 10.98165,1.52672 15.35352,4.58008 4.40655,3.01866 7.58038,7.58077 9.52343,13.6875 1.94305,6.07202 2.15168,13.68953 0.625,22.84961 -1.45728,8.9172 -4.14561,16.44647 -8.0664,22.58787 -3.8861,6.1067 -8.55253,10.739 -14,13.8965 -5.41278,3.1227 -11.15649,4.6836 -17.22852,4.6836 -4.30246,0 -7.82337,-0.7122 -10.56445,-2.1348 -2.74109,-1.4226 -4.89175,-3.2081 -6.45313,-5.3594 -1.52668,-2.1859 -2.62005,-4.3907 -3.27929,-6.6113 l -0.78125,0 -7.06055,42.6778 98.23828,0 0,-140.00004 -646,0 z m 72.058594,29.14258 c 7.910982,0 13.825299,1.73535 17.746094,5.20508 3.920793,3.43503 6.40244,8.01518 7.443359,13.74023 l -11.658203,3.12305 c -0.416368,-1.87366 -1.144628,-3.67921 -2.185547,-5.41406 -1.006221,-1.76957 -2.567059,-3.20805 -4.683594,-4.31836 -2.081837,-1.14502 -4.928591,-1.71875 -8.537109,-1.71875 -4.892319,0 -9.141482,1.12748 -12.75,3.38281 -3.608519,2.22062 -5.6729,5.04934 -6.19336,8.48437 -0.520459,3.01866 0.17368,5.43012 2.082032,7.23438 1.908351,1.80426 5.10022,3.27881 9.576172,4.42383 l 11.449218,2.91406 c 13.60134,3.50443 19.499572,10.7227 17.695313,21.65232 -0.763341,4.5801 -2.757527,8.6728 -5.984375,12.2813 -3.226849,3.6085 -7.355612,6.4552 -12.386719,8.5371 -5.031108,2.0818 -10.634429,3.1211 -16.810547,3.1211 -8.223259,0 -14.713267,-1.7695 -19.466797,-5.3086 -4.753529,-3.5738 -7.28538,-8.7438 -7.597656,-15.5098 l 12.283203,-2.9141 c 0.624551,8.605 6.037277,12.9083 16.238281,12.9083 5.725054,0 10.495798,-1.2158 14.3125,-3.6446 3.816703,-2.4635 5.9854,-5.4126 6.50586,-8.8476 1.040918,-5.65568 -2.291342,-9.40326 -9.994141,-11.24222 l -12.699219,-3.12109 c -7.078248,-1.76956 -12.039587,-4.47593 -14.884765,-8.11914 -2.810481,-3.64322 -3.747374,-8.22337 -2.810547,-13.74024 0.763341,-4.51064 2.707321,-8.50097 5.830078,-11.9707 3.157453,-3.46973 7.111705,-6.19414 11.865234,-8.17187 4.788227,-1.97776 9.994273,-2.9668 15.615235,-2.9668 z m 72.669926,0 c 4.16367,0 8.17203,0.69414 12.02343,2.08203 3.8514,1.38789 7.18171,3.64287 9.99219,6.76562 2.81048,3.08806 4.77055,7.18271 5.88086,12.28321 1.11031,5.1005 1.04207,11.37993 -0.20703,18.83984 l -0.83399,5.20508 -58.13476,0 c -1.49199,9.78463 -0.34646,16.63778 3.43555,20.55858 3.782,3.9208 9.52376,5.8809 17.22656,5.8809 4.92701,0 9.26441,-1.0412 13.01172,-3.1231 3.782,-2.0818 6.80131,-5.2035 9.05664,-9.3672 l 11.24219,3.3301 c -2.87989,6.0373 -7.4259,10.9124 -13.63672,14.625 -6.21082,3.7126 -13.39301,5.5684 -21.54688,5.5684 -7.6681,0 -13.99968,-1.6993 -18.99609,-5.0996 -4.99641,-3.4351 -8.48515,-8.2238 -10.46289,-14.3653 -1.97775,-6.17608 -2.28875,-13.35828 -0.93555,-21.54684 1.35319,-8.18856 4.04152,-15.40488 8.06641,-21.65039 4.02488,-6.28021 9.03838,-11.17331 15.04101,-14.67774 6.00264,-3.53912 12.59501,-5.30859 19.77735,-5.30859 z m 75.92382,0 c 2.5676,0 5.46651,0.31294 8.69336,0.9375 3.22685,0.58985 6.24421,1.82166 9.05469,3.69531 2.84518,1.87365 4.97976,4.70042 6.40234,8.48242 1.45729,3.78201 1.66592,8.84767 0.625,15.19727 l -8.74414,52.67186 -12.2832,0 1.87305,-10.8262 -0.62305,0 c -1.11031,1.7349 -2.81154,3.5906 -5.10156,5.5684 -2.25532,1.9777 -5.11816,3.6609 -8.58789,5.0488 -3.43504,1.3879 -7.47752,2.0821 -12.12696,2.0821 -5.0658,0 -9.50556,-0.955 -13.32226,-2.8633 -3.81671,-1.9431 -6.64542,-4.7357 -8.48438,-8.3789 -1.83896,-3.6779 -2.3425,-8.1197 -1.50976,-13.32425 0.79803,-4.58004 2.34279,-8.29154 4.63281,-11.13671 2.29003,-2.87988 5.06658,-5.13486 8.32813,-6.76563 3.29624,-1.66547 6.83518,-2.89727 10.61718,-3.69531 3.8167,-0.83274 7.61448,-1.47472 11.39649,-1.92578 4.92701,-0.62456 8.93538,-1.11006 12.02343,-1.45704 3.08806,-0.34696 5.41323,-0.92071 6.97461,-1.71874 1.56138,-0.79804 2.51436,-2.16829 2.86133,-4.11133 l 0,-0.41602 c 0.83274,-5.1005 0.15664,-9.07279 -2.02929,-11.91797 -2.18593,-2.87987 -6.08803,-4.32031 -11.70899,-4.32031 -5.82915,0 -10.70421,1.28396 -14.625,3.85156 -3.9208,2.5676 -6.8197,5.30809 -8.69336,8.22266 l -10.82422,-4.16406 c 2.84518,-4.85762 6.24569,-8.63931 10.20118,-11.34571 3.95549,-2.74108 8.10033,-4.64899 12.4375,-5.72461 4.33716,-1.11031 8.51808,-1.66601 12.54296,-1.66601 z m 80.34961,0 c 8.01508,0 14.10391,2.48164 18.26758,7.44336 4.19837,4.96171 5.4643,12.54313 3.79883,22.74414 l -8.53516,50.79686 -12.2832,0 8.32812,-49.96483 c 1.04093,-6.24551 0.22443,-11.13862 -2.44726,-14.67773 -2.63699,-3.53914 -6.81792,-5.3086 -12.54297,-5.3086 -5.93324,0 -11.13733,1.90986 -15.61328,5.72656 -4.44125,3.78201 -7.28605,9.15866 -8.53516,16.13282 l -7.91211,48.09178 -12.28125,0 13.32227,-79.94335 11.86719,0 -2.08203,12.49219 1.04101,0 c 2.49821,-4.05959 5.88067,-7.32165 10.14844,-9.78516 4.26777,-2.49819 9.42165,-3.74804 15.45898,-3.74804 z m 83.75586,0 c 5.41278,0 9.82037,1.37024 13.22071,4.11133 3.40033,2.70638 5.37648,6.38571 5.93164,11.03515 l 0.83398,0 c 2.35942,-4.61474 5.9164,-8.29407 10.66992,-11.03515 4.75353,-2.74109 10.06194,-4.11133 15.92578,-4.11133 7.39052,0 13.046,2.37733 16.9668,7.13086 3.92079,4.71883 5.1526,11.41551 3.69531,20.08984 l -8.95312,53.76366 -22.16992,0 8.32617,-49.39256 c 0.69394,-4.44126 0.0359,-7.77157 -1.97656,-9.99219 -1.97775,-2.22063 -4.73626,-3.33203 -8.2754,-3.33203 -4.02487,0 -7.37322,1.28396 -10.04492,3.85156 -2.67169,2.5329 -4.32076,5.88125 -4.94531,10.04492 l -8.27539,48.8203 -21.49414,0 8.43164,-49.86132 c 0.58985,-3.92079 -0.0521,-7.04246 -1.92578,-9.36718 -1.83896,-2.32472 -4.59748,-3.48828 -8.27539,-3.48828 -3.67792,0 -6.99214,1.35416 -9.94141,4.06054 -2.91457,2.6717 -4.70208,6.22867 -5.36133,10.66992 l -8.11914,47.98632 -22.11914,0 13.32422,-79.94335 21.07813,0 -2.28907,14.10547 0.88477,0 c 2.46351,-4.71883 5.864,-8.41423 10.20117,-11.08594 4.33716,-2.70638 9.22831,-4.06054 14.67578,-4.06054 z m 117.19727,0 c 10.44388,0 18.42453,2.79264 23.9414,8.3789 5.55157,5.58626 7.77243,12.99513 6.66211,22.22461 l -20.87109,0 c 0.0694,-3.95548 -0.95378,-7.1654 -3.07031,-9.6289 -2.08184,-2.46352 -5.13527,-3.69531 -9.16016,-3.69531 -5.20459,-10e-6 -9.7165,2.06437 -13.5332,6.19335 -3.81671,4.12898 -6.33247,9.97506 -7.54688,17.53907 -1.2838,7.6334 -0.72809,13.54967 1.66602,17.74804 2.42881,4.1637 6.22854,6.2461 11.39844,6.2461 3.8514,0 7.26994,-1.1616 10.2539,-3.4863 2.98397,-2.3247 5.16876,-5.60485 6.55664,-9.83792 l 20.92188,0 c -1.38789,6.10673 -3.95386,11.48532 -7.70117,16.13472 -3.74731,4.6495 -8.43178,8.2747 -14.05274,10.877 -5.62096,2.5676 -11.98861,3.8516 -19.10156,3.8516 -8.18856,0 -14.93741,-1.7354 -20.24609,-5.2051 -5.30869,-3.5044 -9.02019,-8.3615 -11.13672,-14.5723 -2.08184,-6.2108 -2.44695,-13.35888 -1.09375,-21.44334 1.3185,-8.18856 4.07701,-15.37076 8.27539,-21.54688 4.23306,-6.21082 9.57755,-11.0498 16.03125,-14.51953 6.45369,-3.50443 13.72216,-5.25781 21.80664,-5.25781 z m -359.09961,11.0332 c -4.47595,0 -8.67491,1.17965 -12.5957,3.53906 -3.8861,2.32472 -7.18229,5.29187 -9.88868,8.90039 -2.67169,3.60852 -4.40508,7.30394 -5.20312,11.08594 l 45.5918,0 c 1.1797,-6.76597 0.15653,-12.36929 -3.07032,-16.81055 -3.19215,-4.47595 -8.1374,-6.71484 -14.83398,-6.71484 z m 436.74023,6.61133 c -5.34338,0 -9.8353,2.11654 -13.47851,6.34961 -3.64322,4.19837 -6.03859,9.86994 -7.1836,17.01758 -1.14501,7.11294 -0.62342,12.83862 1.5625,17.17578 2.22063,4.30246 6.00232,6.45316 11.34571,6.45316 5.48217,0 9.99213,-2.1848 13.53125,-6.55668 3.57382,-4.40655 5.96919,-10.0981 7.18359,-17.07226 1.11031,-6.93946 0.58873,-12.55887 -1.5625,-16.86133 -2.11654,-4.33717 -5.91626,-6.50586 -11.39844,-6.50586 z m -348.5332,23.16016 c -0.62455,0.62455 -1.85635,1.19634 -3.69531,1.71679 -1.83896,0.48577 -3.92138,0.91912 -6.2461,1.30078 -2.29002,0.34698 -4.52695,0.65992 -6.71289,0.9375 -2.15123,0.24288 -3.88657,0.45152 -5.20508,0.625 -3.26154,0.41637 -6.36713,1.09247 -9.3164,2.0293 -2.91457,0.90213 -5.37819,2.27238 -7.39063,4.11133 -1.97774,1.80426 -3.20955,4.26786 -3.69531,7.39057 -0.72865,4.2678 0.29453,7.4958 3.07031,9.6817 2.77578,2.1512 6.60964,3.2266 11.50196,3.2266 4.85762,0 9.10873,-0.955 12.75195,-2.8633 3.67791,-1.9084 6.62703,-4.372 8.84766,-7.3907 2.25532,-3.0186 3.66163,-6.19245 4.21679,-9.52339 l 1.87305,-11.24218 z"
        />
      </g>
    </Svg>
  )
}

export default HeaderLogo
