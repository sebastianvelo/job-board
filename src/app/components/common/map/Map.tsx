export interface MapProps {

}

const Map: React.FC<MapProps> = () => {
    return (
        <div className={`hidden lg:flex px-3 py-2 h-full`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8395.080633110356!2d-58.372349695577036!3d-34.60857380503875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3352cbe276f75%3A0xe16921ef0545f86d!2sCasa%20Rosada!5e0!3m2!1ses-419!2sar!4v1628308957040!5m2!1ses-419!2sar"
                className={`w-full rounded-md`}
                allowFullScreen={true}
                loading="lazy" />
        </div>
    );
}

export default Map;