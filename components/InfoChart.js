import React from 'react';

export default function InfoChart() {
  return (
    <>
      <div className="info-card">
        <div className="info-chart">
          <div className="info-key info-row1 d-flex">
            <span className="first-col" />
            <h4 className="second-col">MV</h4>
            <h4 className="third-col">MEV</h4>
            <h4 className="fourth-col">MAV</h4>
            <h4 className="fifth-col">MRV</h4>
            <h4 className="sixth-col">Frequency</h4>
          </div>
          <hr className="info-line" />
          <div className="info-trap info-row2 d-flex">
            <h4 className="first-col first-fill">Trapezius</h4>
            <h4 className="second-col">0</h4>
            <h4 className="third-col">0</h4>
            <h4 className="fourth-col fourth-fill">12-20</h4>
            <h4 className="fifth-col">26+</h4>
            <h4 className="sixth-col">1-4</h4>
          </div>
          <hr className="info-line" />
          <div className="info-front-delt info-row3 d-flex">
            <h4 className="first-col first-fill">Front Delts</h4>
            <h4 className="second-col">0</h4>
            <h4 className="third-col">0</h4>
            <h4 className="fourth-col fourth-fill">6-8</h4>
            <h4 className="fifth-col">12+</h4>
            <h4 className="sixth-col">1-2</h4>
          </div>
          <hr className="info-line" />
          <div className="info-rear-side-delt info-row4 d-flex">
            <h4 className="first-col first-fill">Rear/Side Delts</h4>
            <h4 className="second-col">0</h4>
            <h4 className="third-col">8</h4>
            <h4 className="fourth-col fourth-fill">16-22</h4>
            <h4 className="fifth-col">26+</h4>
            <h4 className="sixth-col">1-4</h4>
          </div>
          <hr className="info-line" />
          <div className="info-back info-row5 d-flex">
            <h4 className="first-col first-fill">Back</h4>
            <h4 className="second-col">8</h4>
            <h4 className="third-col">10</h4>
            <h4 className="fourth-col fourth-fill">14-22</h4>
            <h4 className="fifth-col">25+</h4>
            <h4 className="sixth-col">1-4</h4>
          </div>
          <hr className="info-line" />
          <div className="info-chest info-row6 d-flex">
            <h4 className="first-col first-fill">Chest</h4>
            <h4 className="second-col">8</h4>
            <h4 className="third-col">10</h4>
            <h4 className="fourth-col fourth-fill">12-20</h4>
            <h4 className="fifth-col">22+</h4>
            <h4 className="sixth-col">1-3</h4>
          </div>
          <hr className="info-line" />
          <div className="info-bicep info-row7 d-flex">
            <h4 className="first-col first-fill">Biceps</h4>
            <h4 className="second-col">0-6</h4>
            <h4 className="third-col">8</h4>
            <h4 className="fourth-col fourth-fill">14-20</h4>
            <h4 className="fifth-col">26+</h4>
            <h4 className="sixth-col">1-4</h4>
          </div>
          <hr className="info-line" />
          <div className="info-tricep info-row8 d-flex">
            <h4 className="first-col first-fill">Triceps</h4>
            <h4 className="second-col">0-4</h4>
            <h4 className="third-col">6</h4>
            <h4 className="fourth-col fourth-fill">10-14</h4>
            <h4 className="fifth-col">18+</h4>
            <h4 className="sixth-col">1-4</h4>
          </div>
          <hr className="info-line" />
          <div className="info-quad info-row9 d-flex">
            <h4 className="first-col first-fill">Quadriceps</h4>
            <h4 className="second-col">6</h4>
            <h4 className="third-col">8</h4>
            <h4 className="fourth-col fourth-fill">12-18</h4>
            <h4 className="fifth-col">20+</h4>
            <h4 className="sixth-col">1-3</h4>
          </div>
          <hr className="info-line" />
          <div className="info-hamstrin info-row10 d-flex">
            <h4 className="first-col first-fill">Hamstrings</h4>
            <h4 className="second-col">4</h4>
            <h4 className="third-col">6</h4>
            <h4 className="fourth-col fourth-fill">10-16</h4>
            <h4 className="fifth-col">20+</h4>
            <h4 className="sixth-col">1-3</h4>
          </div>
          <hr className="info-line" />
          <div className="info-glute info-row11 d-flex">
            <h4 className="first-col first-fill">Glutes</h4>
            <h4 className="second-col">0</h4>
            <h4 className="third-col">0</h4>
            <h4 className="fourth-col fourth-fill">4-12</h4>
            <h4 className="fifth-col">16+</h4>
            <h4 className="sixth-col">1-3</h4>
          </div>
          <hr className="info-line" />
          <div className="info-calve info-row12 d-flex">
            <h4 className="first-col first-fill">Calves</h4>
            <h4 className="second-col">0-6</h4>
            <h4 className="third-col">8</h4>
            <h4 className="fourth-col fourth-fill">12-16</h4>
            <h4 className="fifth-col">20+</h4>
            <h4 className="sixth-col">1-4</h4>
          </div>
        </div>
        <div className="blob" />
      </div>
    </>
  );
}
