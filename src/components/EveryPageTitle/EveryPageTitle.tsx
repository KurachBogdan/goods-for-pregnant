type Props = { title: string }

const EveryPageTitle = ({ title }: Props) => {
    return (
        <>
            <div
                style={{
                    fontFamily: `'Exo 2', sans-serif`,
                    fontSize: '35px',
                    fontWeight: 600,
                    color: '#74c2c2',
                }}
            >
                {title}
            </div>
            <div
                style={{
                    width: '100%',
                    border: '3px solid #74c2c2',
                    borderRadius: '3px',
                    marginTop: '7px',
                    marginBottom: '14px',
                }}
            ></div>
        </>
    )
}

export default EveryPageTitle
