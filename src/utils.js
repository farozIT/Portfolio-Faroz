import { CONFIG } from './config';

export function titleFromFilename(path){
  if (!path) return 'Desain Thumbnail';
  const file = path.split('/').pop().split('\\').pop();
  const noExt = file.replace(/\.(png|jpe?g|webp|gif|svg|mp4|webm|mov|avi|mkv)(\?.*)?$/i, '');
  if (/SaveClip|Instagram|Snapinst|TikTok|facebook/i.test(noExt)) {
    return 'Desain Thumbnail';
  }
  return noExt
    .replace(/[_\-]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim() || 'Desain Thumbnail';
}

export function getAccountNameFromLink(link, customTitle){
  if (customTitle && customTitle.trim() !== '') return customTitle;
  if (!link || link === '#' || link.trim() === '') return 'Proyek Video';

  if (/\.(mp4|webm|mov|avi|mkv)(\?.*)?$/i.test(link)) return titleFromFilename(link);

  let m = link.match(/tiktok\.com\/@([\w.-]+)/i);
  if (m) return '@' + m[1];

  m = link.match(/instagram\.com\/([\.\w.-]+)\/(?:reel|reels|p)\//i);
  if (m && !['p', 'reel', 'reels'].includes(m[1].toLowerCase())){
    return '@' + m[1];
  }

  if (/instagram\.com\/(?:reel|reels|p)\//i.test(link)){
    if (CONFIG && CONFIG.socials && CONFIG.socials.instagram && CONFIG.socials.instagram.url){
      let igM = CONFIG.socials.instagram.url.match(/instagram\.com\/([\w.-]+)/i);
      if (igM) return '@' + igM[1].replace(/\/$/, '');
    }
    return '@farozsabillah';
  }

  m = link.match(/youtube\.com\/@([\w.-]+)/i);
  if (m) return '@' + m[1];

  return customTitle || 'Proyek Video';
}

export function getInlineEmbed(link) {
  if (!link || link.trim() === '') {
    return {
      cls: 'vc-empty',
      html: `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--text-muted);font-family:var(--font-mono);font-size:11px;text-align:center;padding:20px;">
        <i class="ti ti-video" style="font-size:32px;margin-bottom:10px;color:var(--accent);"></i>
        <span>Tempel link video di sini</span>
      </div>`
    };
  }

  let m;
  m = link.match(/(?:tiktok\.com\/(?:@[\w.-]+\/video\/|v\/|embed\/v2\/|t\/)|vt\.tiktok\.com\/|vm\.tiktok\.com\/)(\d+|[\w-]+)/i);
  if (m) {
    const videoId = m[1];
    const embedUrl = /^\d+$/.test(videoId)
      ? `https://www.tiktok.com/embed/v2/${videoId}`
      : link;
    return {
      cls: 'vc-tt',
      html: `<iframe src="${embedUrl}" scrolling="no" style="overflow:hidden;" allow="fullscreen" allowfullscreen></iframe>`
    };
  }

  m = link.match(/instagram\.com\/(?:reel|reels|p)\/([\w-]+)/i);
  if (m) {
    return {
      cls: 'vc-ig',
      html: `<iframe src="https://www.instagram.com/p/${m[1]}/embed" scrolling="no" style="overflow:hidden;" allowfullscreen></iframe>`
    };
  }

  m = link.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([\w-]+)/i);
  if (m) {
    return {
      cls: 'vc-yt',
      html: `<iframe src="https://www.youtube.com/embed/${m[1]}?rel=0&modestbranding=1" scrolling="no" style="overflow:hidden;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    };
  }

  m = link.match(/drive\.google\.com\/file\/d\/([\w-]+)/i);
  if (m) {
    return {
      cls: 'vc-yt',
      html: `<iframe src="https://drive.google.com/file/d/${m[1]}/preview" scrolling="no" style="overflow:hidden;" allowfullscreen></iframe>`
    };
  }

  if (/\.(mp4|webm|mov|avi|mkv)(\?.*)?$/i.test(link)) {
    return {
      cls: 'vc-mp4',
      isMp4: true,
      html: null
    };
  }

  return {
    cls: 'vc-yt',
    html: `<iframe src="${link}" scrolling="no" style="overflow:hidden;" allowfullscreen></iframe>`
  };
}

export function handleDiscordClick(e, setToastMsg) {
  if (e) e.preventDefault();
  const discordId = "723016020817608814";
  const profileUrl = "https://discord.com/users/" + discordId;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(discordId).then(() => {
      if (setToastMsg) setToastMsg("Discord ID (" + discordId + ") disalin ke clipboard! Membuka Discord...");
    }).catch(() => {
      if (setToastMsg) setToastMsg("Membuka profil Discord...");
    });
  } else {
    if (setToastMsg) setToastMsg("Membuka profil Discord...");
  }

  setTimeout(() => {
    window.open(profileUrl, "_blank");
  }, 400);
}
