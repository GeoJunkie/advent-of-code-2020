function day3part1() {
  const shortInput = [
    "..##.......",
    "#...#...#..",
    ".#....#..#.",
    "..#.#...#.#",
    ".#...##..#.",
    "..#.##.....",
    ".#.#.#....#",
    ".#........#",
    "#.##...#...",
    "#...##....#",
    ".#..#...#.#",
  ];
  const longInput = [
    "......#..........##......#.####",
    ".##...###....#.....#...#.#.....",
    "#..##..#.....#............#.#.#",
    "##.#....#####..#....#..#.#.....",
    "..#.#...##.##.......#.#..#..##.",
    "##.#.......#.#.#..#...#.#...#..",
    "...#...#..#.##....##..#.#......",
    ".......##.#.#.#.##...#.........",
    "..#...##.##...##..##.##...#....",
    ".#.#...#.....####..#.#...#.##..",
    ".#...#......##......##....#....",
    "..#.....#.........##.#...#.#...",
    "...#.#...#..##...#....#.....##.",
    "..#.....#..#..#......###.......",
    "...##.#....##..##...........#..",
    "....#......#..#....###...#.....",
    ".....#...#.#.....#..##........#",
    "....#...#....##.#.##.#...#..#.#",
    ".......##.#......##....#....#..",
    "...#.#...##..#...#..#..#..##.#.",
    "##.#...#..#..................##",
    "##........#....##...#..#..#....",
    ".#.#..............#######.##...",
    "##..#..#.#.##..#...............",
    "..#........#..#...##.......#...",
    "............##.##.#..........##",
    ".....##..#.....##..#.....#.....",
    "..#.##.###.#..##.............#.",
    ".........##...........#.....#..",
    "..#....#.#.###.#.#.......##....",
    "..###..##..#.#.##......#.#.##..",
    "##......#.#....##.#..#.#..#.#.#",
    "..##.#.###.#...#...............",
    "..####.......#...#.##....#.....",
    "..#....##...#.#.#.#....#.##..##",
    ".#...####..###....#.###...##...",
    "..#.#..........#.#..#..#.....##",
    ".#....#.........###...#.....##.",
    "..#.#.#.##........#.##.#.....#.",
    "#....#....###...#..#.........#.",
    "#..#.###....#..............#...",
    "............#....##.#......#.#.",
    "...#..#.####...............##..",
    "....##......#.#.........####..#",
    ".#....###..#.#..##........##...",
    "#..##.....###..#...............",
    "..#...........#........#...#..#",
    "......................#.#..#...",
    ".#.##.#..#.#....#...#...#.#....",
    "..#..#.........#..#.#..........",
    ".#......#####...#......#..#....",
    "..........#.....#..#.##.####.##",
    "##.##..#............#####...#.#",
    "..##..#..###......#...#...#....",
    "....#####........#.##...###....",
    "......#...##..#..#............#",
    "...#....##.##...#..#...#.......",
    "....#####.#...............###..",
    ".#....#..##....#.#.#..##.##...#",
    "...#..#..#........#.#####.....#",
    "......##.#...#..#..#.....#..###",
    "###.......#.#........#......#.#",
    "..#.#..#..#........#..#......#.",
    "...##.........#..........#.....",
    "...#..###.#.......#.#.........#",
    "....#..#.##...##.....#.....##..",
    "#.#.#.#.....##.##.###..#.#....#",
    "..#....#.....##.####..#........",
    "...#..#.##.....##.#..#....###..",
    ".#..#.....#....#...#.#.......##",
    "..#..#.......#.#.###......#.##.",
    ".###.####....##............##.#",
    "#....###.#......##.#......##.#.",
    ".##...........#.#....#.........",
    "#.##..##...#...........###....#",
    "#.#..#...#.#..#..###.#.##...#..",
    "..#...#.#..##....#..#..#.......",
    "#..##..#.####...#...#..####.##.",
    "###..#.##....#...#.###..##...##",
    "##..#..#.#....#.....##.......#.",
    "..#..##.##.#.......###.#.....#.",
    "..........#.####....#.......#..",
    "#...#.#..#.......##......##..##",
    "##...##.##..###...............#",
    "....##.#...#.......##...##..#..",
    ".#.........#...#.#...##.#.....#",
    ".#...#.#..#...#..##....#..#...#",
    ".#.#...#..#..###...##....#.....",
    ".........#.#...####..#...#.#...",
    "...#.............#.#..........#",
    "...#...#..##.#........#.#......",
    "...#...#.....#....#..###.##.###",
    ".#.#........#....#...#.###.#.#.",
    "##.....#.......#..##.#....#..##",
    "...###...#.#.#.#....#.#....#...",
    "#...#.#.......##.#..#....#.#...",
    "#...#......###.....###........#",
    "..#.##...##....#...#....#.#....",
    "#....#..###....##.#......##...#",
    "##.#...#..........#.##....#..#.",
    ".##....#............###.#...#..",
    "###.##.#####.##.....##..#####..",
    "..###.###.......#.#...#....#...",
    ".#...#....####.........#.......",
    "..##.#.#......#....#.#....#.#.#",
    "#.####.....#....#..#.....#.##..",
    "###.###.##...##.#.#.#.....#.#..",
    ".......#.....#.......##.#.....#",
    "#..#.##...#........#.#.......##",
    "#.#........#...#....#..........",
    "..#....##.#......#..#..........",
    "#....##.....#.....#.##.#...#...",
    "....#.#.....#....####...#.#.##.",
    "......#.......##...##.#......#.",
    ".#.........##...#..#..##..#....",
    ".#...##.....##.#....#..........",
    "....#.###..##..#...#..........#",
    "......#...#.#.#........##......",
    ".#..........#.#.....#..##..#.#.",
    ".......###.#......#....#.#..#..",
    "..##.......#....#....#.#...##.#",
    "#.##.#.......#..###..##...#.#..",
    "......####....#.#.....#...#..#.",
    "#.##.###..#..#.#.....###..#.#.#",
    "#.#.#..#.#..##...#...#..##.###.",
    "....##..##.#...............#.#.",
    "..###.#.#.##..#....##.......#..",
    "#.#....#..........##......#####",
    ".#.#.......##.#.#......##..#.#.",
    "......#.###.##.#..#....#.##....",
    "..###........#.......##.#.#....",
    ".#..##.............#.##.###...#",
    ".#####...#......#.......##.....",
    "##..###.#...#....#..#....#.#..#",
    ".#.........###.##.....##.....##",
    ".##.#....#..#.#..##..#....##...",
    ".#..#..#......###...#.......#..",
    "#.#...#.....#..#.#.#..#..###...",
    "....#....#..#..#....#..#.#.#...",
    "......#.......#.#.#.#.....#....",
    "###...#...#......#..#.#.#..#.#.",
    "#...##.##.##........##....#....",
    ".....#.......#...#...#.#.#....#",
    "...##.....##.#...#.#.#.#..#..#.",
    ".#.......##...........#...#.##.",
    ".##..........#......#.#...###..",
    ".....##...#.....#...#......#...",
    "...........#.....#..#...#..#.#.",
    "#.....##..#...........##....#..",
    "#.##...###.###....##..#..#....#",
    "#.#.##...##....###....##.##....",
    ".#..###.....#......#...#...#..#",
    "..#...#....#.#.###.#..#......#.",
    "......#.........#..#.##...#...#",
    "..#.#....##.#..##..##...#....#.",
    "#.....#....##.........##.#.....",
    "...#...#..###.###......##...###",
    ".##.###...##..#.##....##.#..#..",
    "..#..#.......#................#",
    ".....#..#.#.#..........##..#...",
    "......###.#.#............#..#.#",
    "..#.##.....##....#...#...#.#...",
    "..#......##...#...##........#..",
    "#.....#.....#..#......#.###...#",
    "....#..#.#.....#...#....#.#...#",
    "#.......#..#...##..#.#..#.##...",
    "..#......###...#.........##...#",
    "...#.......##.....#..##........",
    ".#....#.#.....##.#.#...........",
    "##..#..#...#.##.#.#.#.#.#..##.#",
    "##...####.#.#.##...#..#......#.",
    "#.##..####.##.#.........#...###",
    "#...#.......#.#..####.#.#.#....",
    "#....#........#........#.......",
    "..#..####.....#....##...###.##.",
    "...#.#..####.........#....#.##.",
    "##.#...#...#..#.#..##.....##...",
    "....#.........#.##........##.#.",
    "##...#......#....#..#....#....#",
    "###.....#......##...#...##...#.",
    "#.##...............#.......#...",
    ".##.#...#..#....#.#.....###..#.",
    ".....##...#.##.....##...#....#.",
    "#.#..#..........#####..##......",
    "..#.........##...#.........#.##",
    "...#..##.#.#..#......#..###.###",
    "#..#...#.#...##..........#.....",
    ".###..#....###.....#....#..###.",
    "#..#....#...#........##.....#..",
    ".#..###........#....#..####..##",
    ".#..#.#.#.......##.#..##.#..##.",
    "..#..###......##....#..#..#..#.",
    ".......###..##....#......#...##",
    "#........#.##.............##.#.",
    "...#.#.#....##....##.###...#...",
    "..#.....#..##..#.#.......#.####",
    ".#......##.........##...#.....#",
    ".#.###........##....###.#.#...#",
    "##...#.#....#.....##.......#..#",
    "#...........#...........####...",
    "#..#.#..##..#...#....#.##....#.",
    "................##.............",
    "..##...#.#....##....#...#......",
    ".#.....#....#....#..#..#.#..##.",
    ".....######.#.#.##.###.#.......",
    "..#####....#..#...........#.#..",
    ".......#..#..##.#...###.#.#.###",
    "###...#...#..##.#.##..#...#..#.",
    ".#..#..............#...........",
    ".#.....#.....##....#....##..#..",
    "....#####.#....#......#.......#",
    ".#.#.....##.####..#...#.......#",
    ".#...##.#.......#.....##.#..##.",
    "..........#...#....###....#...#",
    "..#......#...#...#..#.#........",
    ".......#.......#..####..##.....",
    ".#..#.....###...#...#...#...#..",
    "##..#.......#.#...#..#..#.##..#",
    "#..#...#.#.....#.##.#........#.",
    "......#......#.#..###.##..###..",
    ".#..#..#.##.#...........#...##.",
    ".#....#...#.#..#.#.#...##.#..#.",
    "##.#....#..#..#.#...#......#.#.",
    "..#.#............##...#........",
    "...####...#...#.....##..#...###",
    "....###.......###.##..#.###....",
    "#......#.#....#.#.##.#.##..###.",
    ".....##.....#..##.....##....#..",
    "..#...#..##.#.##.#.#.#.......##",
    "#....#..##.......#......#..#.##",
    "#.....##...#..##......##.#.#..#",
    "....#..##..#.##...#.#.##..#..##",
    "#..#...##....##..#...#....#...#",
    ".##.#.#....#.....#........##.#.",
    "..##..#....#........#.....#....",
    ".##.#..##...#.....#...###.....#",
    "#..#..#........#..#.....#.#.#.#",
    "..##..###.#..#...#.#......#..#.",
    "#.....#.....#.###......##..#.#.",
    ".........#...##.........#...#..",
    ".##.#.##......#.#...###..#....#",
    "...##.#..###........##......#..",
    "...#.#...#......#.#.#....#..#..",
    "..####.........#..#....#.......",
    "#..#.........##.#.##....#.....#",
    "..#..#..#.#........#.###.......",
    "##.#..#..#....#...##.......#..#",
    "..#.#.....#.............#...##.",
    "..........#...##.....#..#.#..#.",
    "....#..#...#..##..#...##.#.....",
    "##....#......#..#.....#..#.....",
    "...#.#.#.#...........##...#.#..",
    "....#.###...#............#.....",
    ".#.#.#.......#.#......#....#.#.",
    "#.#.#.#..##.#..#..##...##.#..#.",
    ".#.##....##..#........#....#...",
    "####...#....#.#...#..#..###...#",
    ".....#.#.##.......##..#.######.",
    ".......#.#.#.....#.#..##....#..",
    "..#....#.#..#.#.#..#..#........",
    ".....##......#.........#.#...##",
    "#....##.#.....#..........#.#...",
    "#...#.#..#.#..#.#....#..#.#....",
    "....##........#................",
    "###.#.#...#..##...#...#.##...#.",
    "...#....###..#..##..#..#.......",
    ".....#..........#.#........##.#",
    ".#........#.##.#..##..#...#...#",
    "..##....#...#.#.........##.#...",
    "......#...#......#.....#.......",
    "....##.##..#.##...#.#.#.##.#.#.",
    "..#...#.....#.#....##.#........",
    ".#.#.......#.......###..#..#...",
    "#...#..#..#..##....#...#.....#.",
    ".#..####.##.....##.........#.#.",
    "#...###.......#...####..##.....",
    "#.##.#....#.#.##.......#...#...",
    "..#.......#.#.##.##..#...##....",
    ".#.......#.#..#.....#.....#.#..",
    "..#..#.......##.....#.#.....#.#",
    "#...###..#..#..##...#.....#..##",
    "......#................#.......",
    "..#.....##..#.......#...#...##.",
    "...##...####.#..#...#.......##.",
    "..#...#..#...#...#..#..#####...",
    "#..#...#....#....#...........#.",
    "..#.......#..#.##...##..###...#",
    ".#..#..#......##...#....#......",
    "...#..##....#..........#.....#.",
    "###...#.#......#.#.....#.....##",
    "#.#..#.....#........#.##.#.##..",
    "....#...#.....#..#.......#.#...",
    "#.#...##....#..#.....#...#.#.#.",
    ".#......#...##..#.......#......",
    "...#...#.#.#.###.#..#.#..#.....",
    "###...#..###.#...#..##...####..",
    ".#.#.#..#........#..#......#..#",
    ".#..#....#......#....#.#...#...",
    ".##..........###...##.....#.#..",
    ".#...#.#.##.##..###.#...#..###.",
    "......#......#......#.##......#",
    "..#.##..#.#..#....##..##...#...",
    ".#......#..#...##....#...#.....",
    ".#.....#.##..........#..#......",
    "###.#..#.##..#..##...#..#...#..",
    "#.....###........#.#..##.#.....",
    ".....#.......##.....##.....#.##",
    "...##.#......####....##........",
    "..#..#..#....#.##.....##.####..",
    "...#..#....#.#..#.#..#.#.#..#..",
    "#..........#....#.#.#.#...#..#.",
    "...####.##...#..#.......#.#..##",
    "#........#..#..................",
    ".#..#....#.#.#..#..........#...",
    "###...#....####....#......#..#.",
    "#.........####..#..#...........",
    ".....##..#..##.##.##.#..#.....#",
    ".#..#.#.##..#..#.#.#.##.###....",
    "......##......#...#.##....#..#.",
    ".#.#....#..#......#..#...###...",
    ".##...#......##...###...#.#...#",
    ".......#.#....#............#..#",
    ".#..##.#.######...#...#......#.",
  ];

  const input = longInput;

  let trees = 0;

  for (let i = 0; i < input.length; i++) {
    const position = (i * 3) % input[i].length;
    if (input[i][position] === "#") {
      trees++;
    }
  }

  console.log(trees);
}
