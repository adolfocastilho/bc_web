import Data from "@data/sections/counters.json";

const CountersSection = () => {
    return (
        <>
            {/* counters */}
            <section className="mil-p-90-60">
                <div className="row justify-content-center">
                    {Data.items.map((item, key) => (
                        <div key={`counters-item-${key}`} className="col-md-4 col-lg-4">
                            <div className="mil-center mil-up mil-mb-30">
                                <div className="mil-counter-frame mil-center mil-mb-15">
                                    {item.prefix && <span className="mil-counter-prefix" style={{ fontSize: '4rem', fontWeight: '700' }}>{item.prefix}</span>}
                                    <span className="mil-counter" data-number={item.value} style={{ fontSize: '4rem', fontWeight: '700' }}>0</span>
                                    <span className="" style={{ fontSize: '4rem', fontWeight: '700', marginLeft: '10px' }}>{item.label}</span>
                                </div>
                                <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', opacity: '0.7' }}>{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* counters end */}
        </>
    );
};

export default CountersSection;
