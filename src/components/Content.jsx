import { GridContent } from "../styles/Content.styles";

export default function Content() {
   return(
      <GridContent>
         <section>
            <div>
               <h3>Transform your brand</h3>
               <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
               <button>Learn More</button>
            </div>
         </section>
         <div className="egg"></div>
         <div className="cup"></div>
         <section>
            <div>
               <h3>Stand out to the right audience</h3>
               <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
               <button>Learn More</button>
            </div>
         </section>
         <section className="design">
            <div className="cont-grid">
               <h3>Graphic design</h3>
               <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
         </section>
         <section className="photography">
            <div className="cont-grid">
               <h3>Photography</h3>
               <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
         </section>
      </GridContent>
   )
}