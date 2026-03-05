const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const { spawnSync } = require('child_process');

console.log('FFmpeg path:', ffmpegPath);

const videos = [
    { input: 'public/Video Project 6_Precise_Starlight_Fast_2.mp4', output: 'public/Video Project 6_Precise_Starlight_Fast_2.webm' },
    { input: 'public/Flow_delpmaspu_.mp4', output: 'public/Flow_delpmaspu_.webm' }
];

for (const video of videos) {
    console.log(`Converting ${video.input} to ${video.output}...`);
    const args = [
        '-y',
        '-i', video.input,
        '-c:v', 'libvpx-vp9',
        '-crf', '30',
        '-b:v', '0',
        '-cpu-used', '4',
        video.output
    ];

    const result = spawnSync(ffmpegPath, args, { stdio: 'inherit' });
    if (result.error) {
        console.error('Error during conversion:', result.error);
    } else {
        console.log(`Finished converting ${video.input}. Exit code: ${result.status}`);
    }
}
