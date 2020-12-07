const Grades = {
    template: `
        <div id="grades">
            <nav>
                <h1>Vue My Courses</h1>
            </nav>
            <h1 class="title">Grades</h1>
            <div id="container">
                <div>
                    <input type="search" name="search" placeholder="Search" id="search" />
                    <button>Create</button>
                </div>
                <table>
                    <tr id="columnHeadings">
                        <th>
                            Course
                            <div class="sort">
                                <img class="sortImg" src="/assets/img/asc.png" alt="ascending" />
                                <img class="sortImg" src="/assets/img/desc.png" alt="descending" />
                            </div>
                        </th>
                        <th>
                            Grade
                            <div class="sort">
                                <img class="sortImg" src="/assets/img/asc.png" alt="ascending" />
                                <img class="sortImg" src="/assets/img/desc.png" alt="descending" />
                            </div>
                        </th>
                        <th></th>
                    </tr>
                        <tr v-for="grade in grades" v-bind:key="grade.course">
                            <td>{{ grade.course }}</td>
                            <td>{{ grade.grade }}</td>
                        </tr>
                </table>
            </div>
        </div>
    `,
    data() {
        return {
            grades: [
                {
                    course: "Emerging Web Tech",
                    grade: 100
                },
                {
                    course: "Test",
                    grade: 0
                }
            ]
        }
    }
}