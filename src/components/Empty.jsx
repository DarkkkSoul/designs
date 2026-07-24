function Empty({ githubUrl }) {
    return (
        <div className='relative col-span-2 row-span-2'>
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 z-10 text-white/60 hover:text-white transition-colors"
                >
                    <img src="/code.png" className="size-5" />
                </a>
            )}
        </div>
    )
}

export default Empty