import '../styles/account.css'

import React from 'react'

const Account = () => {
    return (
        <section className='account'>
            <div className="spacer"></div>
            <section className="account-wrapper">
                <h2>User Dashboard</h2>

                <table id="table">

                    <thead>

                        <tr class="row1">
                            <th id="name" rowspan="2">Name</th>
                            <th id="email" rowspan="2">Email</th>
                            <th id="track" rowspan="2">Track</th>
                            <th id="performance" colspan="3">Performance</th>
                            <th rowspan="2" class="total1">Total score</th>
                        </tr>
                        <tr class="row2">
                            <th class="quiz">Online quiz</th>
                            <th class="Individual project ">Individual project</th>
                            <th class="Group project">Group project</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr class="row3">
                            <td class="name">Michael Igwe</td>
                            <td class="email">michael123@gmail.com</td>
                            <td id="track">Web development</td>
                            <td class="online-quiz">72</td>
                            <td class="individual-project">63</td>
                            <td class="group-project">78</td>
                            <td class="total-score">213</td>
                        </tr>
                    </tbody>
                <tfoot>
                </tfoot>

            </table>

            </section>



        </section>
    )
}

export default Account