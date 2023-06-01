type Props = { title: string }

const EveryPageTitle = ({ title }: Props) => {
    return (
        <>
            <div
                style={{
                    fontFamily: `'Bellota Text', cursive`,
                    fontSize: '35px',
                    lineHeight: '35px',
                    fontWeight: 600,
                    color: '#105b63',
                    cursor: 'context-menu'
                }}
            >
                {title}
            </div>
            <div
                style={{
                    width: '100%',
                    border: '3px solid #105b63',
                    borderRadius: '3px',
                    marginTop: '7px',
                    marginBottom: '14px',
                }}
            ></div>
        </>
    )
}

export default EveryPageTitle
