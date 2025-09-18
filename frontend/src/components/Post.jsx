export default function Post({ image, author, content, createdAt }) {

	const getTimeAgo = () => {
		const now = new Date();
		const posted = new Date(createdAt);
		const diffMs = now - posted;
		const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
		const diffMinutes = Math.floor(diffMs / (1000 * 60));

		if (diffMinutes < 60) return `${diffMinutes}min`;
		if (diffHours < 24) return `${diffHours}h`;

		const diffDays = Math.floor(diffHours / 24);
		return `${diffDays}d`;
	};

  return (
    <div className="w-full p-4 mb-4 shadow-sm">
      <div className="flex flex-row items-center mb-2">
        <img src={image} alt="Foto de Perfil" className="w-6 h-6"/>
        <span className="font-bold">{author}</span>
        <span className="text-sm ml-3 text-quaternary">{getTimeAgo()}</span>
      </div>
      <p className="text-left ml-6">{content}</p>
    </div>
  );
}
