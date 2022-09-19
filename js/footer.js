class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <hr style = "border-top: .5px solid #CCC;">
        <div class="col-sm-12 jw-copyright" style="margin-top: -7px;" >
            <div class="row">
                <div class = "col-sm-8">
                    <span class='text-muted' style="font-size: 14px; text-align: center; vertical-align: top;"> ` + new Date().getFullYear() + `. Johannes Wieditz. Department of Medical Statistics • Department of Anaesthesiology. University Medical Centre Göttingen. All rights reserved.
                </div>
                <div class="col-sm-4">
                    <ul class="social-icon" style="vertical-align: top; margin-top: 0px;">
                        <li><a target="_blank" href="https://scholar.google.com/citations?user=Qa6nnbAAAAAJ&hl=de&oi=ao"><i class="fa"><i class="ai ai-google-scholar"></i></i></a></li>
                        <li><a target="_blank" href="https://orcid.org/0000-0001-8601-0266"><i class="fa fa-brands fa-orcid"></i></a></li>
                        <li><a target="_blank" href="https://github.com/jwieditz"><i class="fa fa-brands fa-github"></i></a></li>
                        <li><a target="_blank" href="https://arxiv.org/search/?query=Johannes+Wieditz&searchtype=author&abstracts=show&order=-announced_date_first&size=50"><i class="fa"><i class="ai ai-arxiv"></i></i></a></li>
                        <li><a target="_blank" href="https://linkedin.com/in/johannes-wieditz-a851851b8"><i class="fa fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define('footer-component', Footer);
