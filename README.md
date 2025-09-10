Code Playground - Application Proposal


# Overview:
Interactive web application for exploring 6 programming languages through code examples and course information.


# Components:
- total 8 components

    1. NavLinks
    2. Header
    3. PageIntro
    4. CodeBlock
    5. CourseCard
    6. Footer
    7. ActionButtons
    8. AboutSection


Note: 
    - All components use TypeScript interfaces. 
    - PageIntro, CodeBlock, CourseCard, and ActionButtons receive data as props.
    - NavLinks, Footer, and AboutSection import data directly from data file


1. NavLinks Component/
    Functions: Maps 3 navigation items, renders Next.js Links
    Data: navLinks array with name, href strings

2. Header Component/
    Functions: Renders NavLinks component

3. PageIntro Component/
    Props: title, description strings
    Functions: Displays page intro content

4. CodeBlock Component/
    Props: code, language strings
    State: showCode boolean
    Functions: Toggle button switches "Run"/"Hide", shows/hides code

5. CourseCard Component/
    Props: language, topic, role, description, fullDescription strings
    State: showDescription boolean
    Functions: Toggle button switches "Read More"/"Read Less", shows/hides fullDescription

6. Footer Component/
    Functions: Displays copyright info
    Data: footerData object with copyright, year, description

7.  ActionButtons Component/
    Props: title, href, description strings (from actionButtonData array)
    Functions: Renders 2 navigation buttons with descriptions
    Data: actionButtonData array with navigation information

8. AboutSection Component/
    Functions: Displays creator information and description
    Data: aboutData object with name, role, description strings


# Page Structure

- Home Page (/)
    Components: PageIntro + ActionButtons
    Data: pageIntroData["home"] + actionButtonData array
    Functionality: Static page with styled navigation links
    Content: Welcome message with 2 navigation buttons to courses and about

- Courses Page (/courses)
    Components: PageIntro + CourseCard + CodeBlock
    Data Sources: pageIntroData["courses"] + languageCourses array + codeExamples array
    Rendered instances: CourseCard renders 6 times, CodeBlock renders 6 times
    Interactive Elements: 12 toggle buttons total (6 "Read More/Less" + 6 "Run/Hide")
    Functionality: Independent toggle states for each component

- About Page (/about)
    Components: PageIntro + AboutSection
    Data: pageIntroData["about"] + aboutData object
    Functionality: Static information page displaying creator personality and platform purpose
    Content: Platform information and creator details


# Data Arrays and Objects

- navLinks: 3 navigation items
- pageIntroData: 3 page configurations (home, courses, about)
- languageCourses: 6 programming language courses
- codeExamples: 6 code examples
- callToActionsData: 2 navigation buttons
- aboutData: Creator information
- footerData: Site footer content
